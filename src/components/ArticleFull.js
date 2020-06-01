import Layout from "./layout";
import Head from "next/head";
import {graphql, QueryRenderer} from "react-relay";
import environment from "../../relay_env";
import Link from "next/link";
import React from "react";

export default function ArticleFull(props) {
  return (
    <Layout>
      <Head>
        <title>Article</title>
      </Head>
      <div>
        <QueryRenderer
          environment={environment}
          query={graphql`
          query ArticleFullArticleQuery($id: ID!) {
            node(id: $id) {
              id,
              ... on Article {
                title,
                content
              }
            }
          }
        `}
          variables={{id: props.id}}
          render={({error, props}) => {
            if (error) {
              return <div>Error!</div>;
            }
            if (!props) {
              return <div>Loading...</div>;
            }
            const article = props.node;
            return (<div>
              <h2>{article.title}</h2>
              <Link href={`/article/${article.id}/edit`}><a>Edit</a></Link>
              <p>{article.content}</p>
            </div>);
          }}/>
      </div>
      <div>
        <Link href={'/'}><a>Back to blog</a></Link>
      </div>

      <footer>
      </footer>
    </Layout>
  )
}
