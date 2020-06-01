import Link from "next/link";
import Head from "next/head";
import Layout from "../../../components/layout.js";
import React from "react";
import ArticleForm from "../../../components/ArticleForm.js";
import {graphql, QueryRenderer} from "react-relay";
import environment from "../../../../relay_env.js";
import {useRouter} from "next/router.js";

export default function EditArticle() {
  const router = useRouter();
  const {id} = router.query;
  if (id == null) {
    return <></>
  }

  return <>
    <Layout>
      <Head>
        <title>Update an article</title>
      </Head>
      <div>
        <QueryRenderer
          environment={environment}
          query={graphql`
          query editArticleFullArticleQuery($id: ID!) {
            node(id: $id) {
              id,
              ... on Article {
                title,
                content
              }
            }
          }
        `}
          variables={{id: id}}
          render={({error, props}) => {
            if (error) {
              return <div>Error!</div>;
            }
            if (!props) {
              return <div>Loading...</div>;
            }
            const article = props.node;
            return <ArticleForm article={article}/>
          }}/>
        <Link href={'/'}><a>Back to blog</a></Link>
      </div>
    </Layout>
  </>
}
