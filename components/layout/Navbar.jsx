import Link from "next/link";
import React, { useContext } from "react";
import { Store } from "../../context/store";
const Navbar = () => {
  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <nav className="flex h-12 justify-between items-center px-5 shadow-md ">
      <Link href="/">
        <a className="text-lg font-bold">Amazona</a>
      </Link>

      <div>
        <Link href="/cart">
          <a className="p-2">
            Cart
            {cart.cartItems.length > 0 && (
              <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
              </span>
            )}
          </a>
        </Link>

        <Link href="/login">
          <a className="p-2">Login</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
