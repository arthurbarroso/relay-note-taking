import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
  GraphQLObjectTypeConfig,
  GraphQLInt,
} from 'graphql';

import { globalIdField } from 'graphql-relay';
import GraphQLContext from '../types/GraphQLContext';

import { nodeInterface } from '../types/nodeInterface';
import { connectionDefinitions } from '../types/ConnectionType';

import { UserModel } from './users/UserModel';

type UserConfigType = GraphQLObjectTypeConfig<UserModel, GraphQLContext>;

const UserTypeConfig: UserConfigType = {
  name: 'User',
  description: 'Represents user',
  fields: () => ({
    id: globalIdField('User'),
    _id: {
      type: GraphQLNonNull(GraphQLString),
      description: 'MongoDB _id',
      resolve: user => user._id,
    },
    username: {
      type: GraphQLString,
      resolve: user => user.username,
    },
    email: {
      type: GraphQLString,
      resolve: user => user.email,
    },
    age: {
      type: GraphQLInt,
      resolve: user => user.age,
    },
    createdAt: {
      type: GraphQLString,
      resolve: todo => todo.createdAt,
    },
    updatedAt: {
      type: GraphQLString,
      resolve: todo => todo,
    },
  }),
  interfaces: () => [nodeInterface],
};

export const UserType = new GraphQLObjectType(UserTypeConfig);

export const UserConnection = connectionDefinitions({
  name: 'User',
  nodeType: UserType,
});
