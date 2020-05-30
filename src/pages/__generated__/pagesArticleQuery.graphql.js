/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type pagesArticleQueryVariables = {|
  tagsIn?: ?$ReadOnlyArray<string>
|};
export type pagesArticleQueryResponse = {|
  +articles: ?$ReadOnlyArray<?{|
    +id: string,
    +title: ?string,
    +content: ?string,
  |}>
|};
export type pagesArticleQuery = {|
  variables: pagesArticleQueryVariables,
  response: pagesArticleQueryResponse,
|};
*/


/*
query pagesArticleQuery(
  $tagsIn: [String!]
) {
  articles(tagsIn: $tagsIn) {
    id
    title
    content
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "tagsIn",
    "type": "[String!]"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "tagsIn",
        "variableName": "tagsIn"
      }
    ],
    "concreteType": "ArticleGraphql",
    "kind": "LinkedField",
    "name": "articles",
    "plural": true,
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "pagesArticleQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "pagesArticleQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "pagesArticleQuery",
    "operationKind": "query",
    "text": "query pagesArticleQuery(\n  $tagsIn: [String!]\n) {\n  articles(tagsIn: $tagsIn) {\n    id\n    title\n    content\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bb60e637dd94faa068c7abca93623674';

module.exports = node;
