import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function CreateArticle() {
  return <>
    <Layout>
      <Head>
        <title>Create a new article</title>
      </Head>
      <form>
        <label>This will be a form.</label>
      </form>
      <div>
        <Link href={'/'}><a>Back to blog</a></Link>
      </div>
    </Layout>
  </>
}
