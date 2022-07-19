import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex h-12 justify-between items-center px-5 shadow-md ">
      <Link href="/">
        <a className="text-lg font-bold">Amazona</a>
      </Link>

      <div>
        <Link href="/cart">
          <a className="p-2">Cart</a>
        </Link>

        <Link href="/login">
          <a className="p-2">Login</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
