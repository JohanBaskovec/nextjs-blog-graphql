/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateArticleInput = {|
  id: string,
  title: string,
  content: string,
|};
export type UpdateArticleMutationVariables = {|
  input: UpdateArticleInput
|};
export type UpdateArticleMutationResponse = {|
  +updateArticle: {|
    +article: ?{|
      +id: string,
      +title: string,
      +content: string,
    |}
  |}
|};
export type UpdateArticleMutation = {|
  variables: UpdateArticleMutationVariables,
  response: UpdateArticleMutationResponse,
|};
*/


/*
mutation UpdateArticleMutation(
  $input: UpdateArticleInput!
) {
  updateArticle(input: $input) {
    article {
      id
      title
      content
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateArticleInput!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateArticlePayload",
    "kind": "LinkedField",
    "name": "updateArticle",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Article",
        "kind": "LinkedField",
        "name": "article",
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
    "name": "UpdateArticleMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateArticleMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "UpdateArticleMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateArticleMutation(\n  $input: UpdateArticleInput!\n) {\n  updateArticle(input: $input) {\n    article {\n      id\n      title\n      content\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ad6cf1a6f325735ec7aed65a165c0848';

module.exports = node;
