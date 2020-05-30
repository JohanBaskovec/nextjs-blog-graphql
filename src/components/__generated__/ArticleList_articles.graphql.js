/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ArticleSummary_articleSummary$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ArticleList_articles$ref: FragmentReference;
declare export opaque type ArticleList_articles$fragmentType: ArticleList_articles$ref;
export type ArticleList_articles = {|
  +totalCount: number,
  +edges: ?$ReadOnlyArray<{|
    +node: {|
      +id: string,
      +$fragmentRefs: ArticleSummary_articleSummary$ref,
    |},
    +cursor: string,
  |}>,
  +pageInfo: ?{|
    +endCursor: ?string,
    +hasNextPage: boolean,
    +hasPreviousPage: boolean,
    +startCursor: ?string,
  |},
  +$refType: ArticleList_articles$ref,
|};
export type ArticleList_articles$data = ArticleList_articles;
export type ArticleList_articles$key = {
  +$data?: ArticleList_articles$data,
  +$fragmentRefs: ArticleList_articles$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleList_articles",
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
              "args": null,
              "kind": "FragmentSpread",
              "name": "ArticleSummary_articleSummary"
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
  "type": "ArticleConnection"
};
// prettier-ignore
(node/*: any*/).hash = '9cf855cfd87a2742c0f792dc3d8c4448';

module.exports = node;
