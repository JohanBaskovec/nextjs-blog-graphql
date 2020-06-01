/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ArticleSummary_articleSummary$ref: FragmentReference;
declare export opaque type ArticleSummary_articleSummary$fragmentType: ArticleSummary_articleSummary$ref;
export type ArticleSummary_articleSummary = {|
  +id: string,
  +title: string,
  +content: string,
  +$refType: ArticleSummary_articleSummary$ref,
|};
export type ArticleSummary_articleSummary$data = ArticleSummary_articleSummary;
export type ArticleSummary_articleSummary$key = {
  +$data?: ArticleSummary_articleSummary$data,
  +$fragmentRefs: ArticleSummary_articleSummary$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleSummary_articleSummary",
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
  "type": "Article"
};
// prettier-ignore
(node/*: any*/).hash = '68d0d98e3c83930b396902e4873d17ea';

module.exports = node;
