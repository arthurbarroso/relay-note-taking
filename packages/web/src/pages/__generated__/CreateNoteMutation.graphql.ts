/* tslint:disable */
/* eslint-disable */
/* @relayHash ae032a822c0041ee1e6aefd768df711d */

import { ConcreteRequest } from "relay-runtime";
export type createNoteInput = {
    title: string;
    content: string;
    clientMutationId?: string | null;
};
export type CreateNoteMutationVariables = {
    input: createNoteInput;
};
export type CreateNoteMutationResponse = {
    readonly createNote: {
        readonly NoteEdge: {
            readonly node: {
                readonly id: string;
                readonly title: string | null;
                readonly content: string | null;
                readonly author: {
                    readonly username: string | null;
                };
            } | null;
        } | null;
    } | null;
};
export type CreateNoteMutation = {
    readonly response: CreateNoteMutationResponse;
    readonly variables: CreateNoteMutationVariables;
};



/*
mutation CreateNoteMutation(
  $input: createNoteInput!
) {
  createNote(input: $input) {
    NoteEdge {
      node {
        id
        title
        content
        author {
          username
          id
        }
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "createNoteInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "content",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateNoteMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createNote",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "createNotePayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "NoteEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "NoteEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Note",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "author",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/)
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateNoteMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createNote",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "createNotePayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "NoteEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "NoteEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Note",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "author",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v2/*: any*/)
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateNoteMutation",
    "id": null,
    "text": "mutation CreateNoteMutation(\n  $input: createNoteInput!\n) {\n  createNote(input: $input) {\n    NoteEdge {\n      node {\n        id\n        title\n        content\n        author {\n          username\n          id\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'bff36b2932207ecf52d33bffc8c0dac5';
export default node;
