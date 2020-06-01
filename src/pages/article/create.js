import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import React from "react";
import ArticleForm from "../../components/ArticleForm.js";

export default function CreateArticle() {
  return <>
    <Layout>
      <Head>
        <title>Create a new article</title>
      </Head>
      <div>
        <ArticleForm />
        <Link href={'/'}><a>Back to blog</a></Link>
      </div>
    </Layout>
  </>
}
