import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import QueryType from './modules/QueryType';
import MutationType from './modules/MutationType';

export default new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
