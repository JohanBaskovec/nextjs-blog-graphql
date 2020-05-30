import Head from "next/head";
import React from "react";

export default function Layout({children}) {
  return <div className={"container"}>
    <Head>
      <title>Blog</title>
      <link rel={"icon"} href={"/favicon.ico"}/>
    </Head>
    <header>

    </header>

    <main>
      {children}
    </main>
  </div>
}
