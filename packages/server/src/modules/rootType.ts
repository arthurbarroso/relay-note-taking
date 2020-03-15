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
import { NoteModel } from './notes/NoteModel';

import { findAuthor } from './notes/NoteLoader';
import { getNotes } from './users/UserLoader';

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
    createdAt: {
      type: GraphQLString,
      resolve: user => user.createdAt,
    },
    updatedAt: {
      type: GraphQLString,
      resolve: user => user.updatedAt,
    },
    notes: {
      type: NoteConnection.connectionType,
      resolve: async user => getNotes(user, '', '', ''),
    },
  }),
  interfaces: () => [nodeInterface],
};

export const UserType = new GraphQLObjectType(UserTypeConfig);

export const UserConnection = connectionDefinitions({
  name: 'User',
  nodeType: UserType,
});

type NoteConfigType = GraphQLObjectTypeConfig<NoteModel, GraphQLContext>;

const NoteTypeConfig: NoteConfigType = {
  name: 'Note',
  description: 'Represents Note',
  fields: () => ({
    id: globalIdField('Note'),
    _id: {
      type: GraphQLNonNull(GraphQLString),
      description: 'MongoDB _id',
      resolve: note => note._id,
    },
    title: {
      type: GraphQLString,
      resolve: note => note.title,
    },
    content: {
      type: GraphQLString,
      resolve: note => note.content,
    },
    createdAt: {
      type: GraphQLString,
      resolve: note => note.createdAt,
    },
    updatedAt: {
      type: GraphQLString,
      resolve: note => note.updatedAt,
    },
    author: {
      type: GraphQLNonNull(UserType),
      resolve: note => findAuthor(note, '', '', ''),
    },
  }),
  interfaces: () => [nodeInterface],
};

export const NoteType = new GraphQLObjectType(NoteTypeConfig);

export const NoteConnection = connectionDefinitions({
  name: 'Note',
  nodeType: NoteType,
});

export const AuthType = new GraphQLObjectType({
  name: 'AuthType',
  fields: {
    token: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
});
