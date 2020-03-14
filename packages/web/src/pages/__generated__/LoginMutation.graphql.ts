/* tslint:disable */
/* eslint-disable */
/* @relayHash 802aed01cb9a87cd99320a6d3fc6738a */

import { ConcreteRequest } from "relay-runtime";
export type AuthInput = {
    username?: string | null;
    password?: string | null;
};
export type LoginMutationVariables = {
    input: AuthInput;
};
export type LoginMutationResponse = {
    readonly login: {
        readonly token: string;
    } | null;
};
export type LoginMutation = {
    readonly response: LoginMutationResponse;
    readonly variables: LoginMutationVariables;
};



/*
mutation LoginMutation(
  $input: AuthInput!
) {
  login(input: $input) {
    token
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AuthInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "login",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AuthType",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
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
    "name": "LoginMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "LoginMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "LoginMutation",
    "id": null,
    "text": "mutation LoginMutation(\n  $input: AuthInput!\n) {\n  login(input: $input) {\n    token\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '94543b12355d9b47e7af795c57bb940c';
export default node;
