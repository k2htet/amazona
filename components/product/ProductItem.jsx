/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Image from "next/image";

const ProductItem = ({ product }) => {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <a>
          <Image
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </a>
      </Link>

      <div className="flex items-center justify-center flex-col p-5">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg text-gray-700">{product.name}</h2>
          </a>
        </Link>
        <p className="my-1 text-gray-700">{product.brand}</p>
        <p>${product.price}</p>
        <button type="button" className="primary-button">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
