/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type IdArticleQueryVariables = {|
  id: string
|};
export type IdArticleQueryResponse = {|
  +articles: ?$ReadOnlyArray<?{|
    +id: string,
    +title: ?string,
    +content: ?string,
  |}>
|};
export type IdArticleQuery = {|
  variables: IdArticleQueryVariables,
  response: IdArticleQueryResponse,
|};
*/


/*
query IdArticleQuery(
  $id: String!
) {
  articles(id: $id) {
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
    "name": "id",
    "type": "String!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
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
    "name": "IdArticleQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IdArticleQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "IdArticleQuery",
    "operationKind": "query",
    "text": "query IdArticleQuery(\n  $id: String!\n) {\n  articles(id: $id) {\n    id\n    title\n    content\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cab620a32ee3c1fee1014a87fb026295';

module.exports = node;
