import React from "react";
import Head from "next/head";
import { Navbar, Footer } from "../layout";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + "Amazona" : "Amazona"}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <Navbar />
        </header>

        <main className="container m-auto mt-4 px-4">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
