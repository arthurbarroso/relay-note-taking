/* tslint:disable */
/* eslint-disable */
/* @relayHash 622b7303d3bb6269f000cbb1e3ffa804 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type NoteRefetchPaginationQueryVariables = {
    first?: number | null;
    search?: string | null;
};
export type NoteRefetchPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"NoteRefetch_query">;
};
export type NoteRefetchPaginationQuery = {
    readonly response: NoteRefetchPaginationQueryResponse;
    readonly variables: NoteRefetchPaginationQueryVariables;
};



/*
query NoteRefetchPaginationQuery(
  $first: Int
  $search: String
) {
  ...NoteRefetch_query
}

fragment NoteRefetch_query on Query {
  notes(first: $first, search: $search) {
    edges {
      node {
        id
        _id
        content
        title
        important
        __typename
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "search",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "search",
    "variableName": "search"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "NoteRefetchPaginationQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "NoteRefetch_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NoteRefetchPaginationQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "notes",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "NoteConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "NoteEdge",
            "plural": true,
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
                    "name": "_id",
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
                    "name": "important",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfoExtended",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "notes",
        "args": (v1/*: any*/),
        "handle": "connection",
        "key": "Refetch_notes",
        "filters": [
          "search"
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "NoteRefetchPaginationQuery",
    "id": null,
    "text": "query NoteRefetchPaginationQuery(\n  $first: Int\n  $search: String\n) {\n  ...NoteRefetch_query\n}\n\nfragment NoteRefetch_query on Query {\n  notes(first: $first, search: $search) {\n    edges {\n      node {\n        id\n        _id\n        content\n        title\n        important\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'c2387c2160a9d02ac99909c77f56bbf7';
export default node;
