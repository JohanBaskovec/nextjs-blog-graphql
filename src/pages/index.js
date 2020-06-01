import Head from 'next/head'
import Layout from "../components/layout";
import React from "react";
import ArticleListRenderer from "../components/ArticleListRenderer.js";
import Link from "next/link.js";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>

      <h1 className="title">
        Welcome!
      </h1>
      <div>
        <Link href={"/article/create"}><a>New article</a></Link>
      </div>
      <ArticleListRenderer />

      <footer>
      </footer>
    </Layout>
  )
}
