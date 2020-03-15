/* tslint:disable */
/* eslint-disable */
/* @relayHash 9395b7df1a751b0f3b95b38bff566a5a */

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
    "text": "query NoteDetailQuery(\n  $id: ID!\n) {\n  note(id: $id) {\n    id\n    content\n    title\n    _id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '354dbc9772fba4a0c6a8c5b25a202285';
export default node;
