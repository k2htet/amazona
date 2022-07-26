import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Layout } from "../../components/layout";
import { Store } from "../../context/store";
import data from "../../utils/data";

const ProductDetail = () => {
  const { query, push } = useRouter();
  const { slug } = query;

  const { state, dispatch } = useContext(Store);
  const product = data.products.find((x) => x.slug === slug);

  if (!product) {
    return <div>Product not found!</div>;
  }

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert("Sorry, Product is out of stock!");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    push("/cart");
  };

  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">Back to product</Link>
      </div>

      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            layout="responsive"
          ></Image>
        </div>

        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>Category : {product.category}</li>
            <li>Brand : {product.brand}</li>
            <li>
              {product.rating} of {product.numReviews}
            </li>
            <li>Description : {product.description}</li>
          </ul>
        </div>

        <div className="card p-5">
          <div className="mb-2 flex justify-between">
            <div>price</div>
            <div>${product.price}</div>
          </div>

          <div className="mb-2 flex justify-between">
            <div>Status</div>
            <div>${product.countInStock > 0 ? "Instock" : "Unavailable"}</div>
          </div>
          <button className="primary-button w-full" onClick={addToCartHandler}>
            Add to cart
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
