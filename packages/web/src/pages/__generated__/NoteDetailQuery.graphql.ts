/* tslint:disable */
/* eslint-disable */
/* @relayHash bb9568bad14df52f82c9bb240c6e3862 */

import { ConcreteRequest } from "relay-runtime";
export type NoteDetailQueryVariables = {
    id: string;
};
export type NoteDetailQueryResponse = {
    readonly note: {
        readonly id: string;
        readonly content: string | null;
        readonly title: string | null;
        readonly _id: string;
        readonly important: boolean | null;
    } | null;
};
export type NoteDetailQuery = {
    readonly response: NoteDetailQueryResponse;
    readonly variables: NoteDetailQueryVariables;
};



/*
query NoteDetailQuery(
  $id: ID!
) {
  note(id: $id) {
    id
    content
    title
    _id
    important
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "note",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Note",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "content",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "_id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "important",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "NoteDetailQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "NoteDetailQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "NoteDetailQuery",
    "id": null,
    "text": "query NoteDetailQuery(\n  $id: ID!\n) {\n  note(id: $id) {\n    id\n    content\n    title\n    _id\n    important\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '66281d59afc4af5988d9081d70422221';
export default node;
