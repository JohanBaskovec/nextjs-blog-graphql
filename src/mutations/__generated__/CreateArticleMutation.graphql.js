/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateArticleInput = {|
  title: string,
  content: string,
|};
export type CreateArticleMutationVariables = {|
  input: CreateArticleInput
|};
export type CreateArticleMutationResponse = {|
  +createArticle: {|
    +article: ?{|
      +id: string
    |}
  |}
|};
export type CreateArticleMutation = {|
  variables: CreateArticleMutationVariables,
  response: CreateArticleMutationResponse,
|};
*/


/*
mutation CreateArticleMutation(
  $input: CreateArticleInput!
) {
  createArticle(input: $input) {
    article {
      id
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
    "type": "CreateArticleInput!"
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
    "concreteType": "CreateArticlePayload",
    "kind": "LinkedField",
    "name": "createArticle",
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
    "name": "CreateArticleMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateArticleMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "CreateArticleMutation",
    "operationKind": "mutation",
    "text": "mutation CreateArticleMutation(\n  $input: CreateArticleInput!\n) {\n  createArticle(input: $input) {\n    article {\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5b745395504e786a5f8162fc454dfd38';

module.exports = node;
