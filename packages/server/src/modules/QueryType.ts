import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';
import { connectionArgs, globalIdField, fromGlobalId } from 'graphql-relay';
import { UserType, UserConnection } from './rootType';
import { loadUsers } from './users/UserLoader';
import { nodeField } from '../types/nodeInterface';
import GraphQLContext from '../types/GraphQLContext';

/*

*/

export default new GraphQLObjectType<any, GraphQLContext, any>({
  name: 'Query',
  description: 'Main query',
  fields: () => ({
    id: globalIdField('id'),
    node: nodeField,

    users: {
      type: GraphQLNonNull(UserConnection.connectionType),
      args: {
        ...connectionArgs,
        search: {
          type: GraphQLString,
        },
      },
      resolve: async (_, args, context) => loadUsers(context, args),
    },
  }),
});
