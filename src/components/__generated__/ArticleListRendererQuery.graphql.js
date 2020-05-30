/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ArticleList_articles$ref = any;
export type ArticleListRendererQueryVariables = {||};
export type ArticleListRendererQueryResponse = {|
  +articles: {|
    +$fragmentRefs: ArticleList_articles$ref
  |}
|};
export type ArticleListRendererQuery = {|
  variables: ArticleListRendererQueryVariables,
  response: ArticleListRendererQueryResponse,
|};
*/


/*
query ArticleListRendererQuery {
  articles {
    ...ArticleList_articles
  }
}

fragment ArticleList_articles on ArticleConnection {
  totalCount
  edges {
    node {
      id
      ...ArticleSummary_articleSummary
    }
    cursor
  }
  pageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
  }
}

fragment ArticleSummary_articleSummary on Article {
  title
  content
}
*/

const node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArticleListRendererQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ArticleConnection",
        "kind": "LinkedField",
        "name": "articles",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ArticleList_articles"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArticleListRendererQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ArticleConnection",
        "kind": "LinkedField",
        "name": "articles",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalCount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ArticleEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Article",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "content",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPreviousPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startCursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ArticleListRendererQuery",
    "operationKind": "query",
    "text": "query ArticleListRendererQuery {\n  articles {\n    ...ArticleList_articles\n  }\n}\n\nfragment ArticleList_articles on ArticleConnection {\n  totalCount\n  edges {\n    node {\n      id\n      ...ArticleSummary_articleSummary\n    }\n    cursor\n  }\n  pageInfo {\n    endCursor\n    hasNextPage\n    hasPreviousPage\n    startCursor\n  }\n}\n\nfragment ArticleSummary_articleSummary on Article {\n  title\n  content\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = '089afa6f8c29157c4ba982f7c26bb355';

module.exports = node;
