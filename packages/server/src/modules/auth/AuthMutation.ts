import { GraphQLString, GraphQLInputObjectType } from 'graphql';
import { AuthType } from '../rootType';
import { login } from './AuthLoader';

const loginMutation = {
  type: AuthType,
  args: {
    input: {
      type: new GraphQLInputObjectType({
        name: 'AuthInput',
        fields: {
          username: {
            type: GraphQLString,
          },
          password: {
            type: GraphQLString,
          },
        },
      }),
    },
  },
  resolve: (parentValues, args, context, info) => {
    return login(parentValues, args, context, info);
  },
};

export { loginMutation };
