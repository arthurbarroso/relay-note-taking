/* tslint:disable */
/* eslint-disable */
/* @relayHash 28b4a817f9442ee7219dc1a7d6dc25ed */

import { ConcreteRequest } from "relay-runtime";
export type createUserInput = {
    username: string;
    email: string;
    password: string;
    clientMutationId?: string | null;
};
export type RegisterMutationVariables = {
    input: createUserInput;
};
export type RegisterMutationResponse = {
    readonly createUser: {
        readonly userEdge: {
            readonly node: {
                readonly username: string | null;
            } | null;
        } | null;
    } | null;
};
export type RegisterMutation = {
    readonly response: RegisterMutationResponse;
    readonly variables: RegisterMutationVariables;
};



/*
mutation RegisterMutation(
  $input: createUserInput!
) {
  createUser(input: $input) {
    userEdge {
      node {
        username
        id
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
    "type": "createUserInput!",
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
  "name": "username",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RegisterMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createUser",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "createUserPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "userEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "UserEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v2/*: any*/)
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
    "name": "RegisterMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createUser",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "createUserPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "userEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "UserEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
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
    "name": "RegisterMutation",
    "id": null,
    "text": "mutation RegisterMutation(\n  $input: createUserInput!\n) {\n  createUser(input: $input) {\n    userEdge {\n      node {\n        username\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '83b4e805f668e67a11d5d04834e2a585';
export default node;
