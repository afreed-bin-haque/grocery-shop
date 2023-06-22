import React from "react";
import Navbar from "./navbar";
import Decorate from "../pages/_document";
import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from "./footer";
import Sidebar from "./sidebar";

function Layout({ children, title }) {
  return (
    <>
     <Head>
        <title>{ title } - Loitf And Sons</title>
      </Head>
      <Navbar />
      <Sidebar />
      <main className="div_main">{children}</main>
      <Footer/>
    </>
  );
}

export default Layout;