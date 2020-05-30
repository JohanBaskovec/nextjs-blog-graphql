import React from "react";
import environment from "../../relay_env.js";
import ArticleList from "./ArticleList.js";
import {QueryRenderer} from "react-relay";

export default function ArticleListRenderer(props) {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
      
        query ArticleListRendererQuery {
            articles {
              ...ArticleList_articles
            }
        }
      `}
      variables={{}}
      render={({error, props}) => {
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return (
          <ArticleList articles={props.articles}/>
        );
      }
      }
    />
  )
}
