import Head from 'next/head'
import Layout from "../components/layout";
import React from "react";
import ArticleListRenderer from "../components/ArticleListRenderer.js";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>

      <h1 className="title">
        Welcome!
      </h1>
      <ArticleListRenderer />

      <footer>
      </footer>
    </Layout>
  )
}
