import { GraphQLObjectType } from 'graphql';
import userMutations from './users/mutations';

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...userMutations,
  }),
});
