import {createFragmentContainer, graphql} from "react-relay";
import React from "react";
import ArticleSummary from "./ArticleSummary";

function ArticleList(props) {
  return (<div>
    {props.articles.edges.map((edge) => {
      return <ArticleSummary key={edge.node.id} articleSummary={edge.node}/>;
    })}
  </div>);
}

export default createFragmentContainer(
  ArticleList,
  {
    articles: graphql`
        fragment ArticleList_articles on ArticleConnection {
            totalCount,
            edges {
                node {
                    ...ArticleSummary_articleSummary
                },
                cursor
            },
            pageInfo {
                endCursor,
                hasNextPage,
                hasPreviousPage,
                startCursor
            }
        }
    `
  }
)
