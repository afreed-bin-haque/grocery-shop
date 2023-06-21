import React from "react";
import Navbar from "./navbar";
import Decorate from "../pages/_document";
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Footer from "./footer";
import Sidebar from "./sidebar";

function Layout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      const pageName = getPageName(url);
      document.title = `${pageName}.::.Loitf And Sons`;
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);
  const getPageName = (url) => {
    const pathname = url.replace('/', '');
    return pathname.charAt(0).toUpperCase() + pathname.slice(1);
  }
  return (
    <>
     <Head>
        <title>Loitf And Sons</title>
      </Head>
      <Navbar />
      <Sidebar />
      <main className="div_main">{children}</main>
      <Footer/>
    </>
  );
}

export default Layout;