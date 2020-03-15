import { GraphQLNonNull, GraphQLString, GraphQLBoolean } from 'graphql';
import { mutationWithClientMutationId, toGlobalId } from 'graphql-relay';

import Note from '../NoteModel';
import { load } from '../NoteLoader';
import { NoteConnection } from '../../rootType';

import getUserId from '../../../util/getUser';

interface noteArguments {
  title: string;
  content: string;
}

const mutation = mutationWithClientMutationId({
  name: 'createNote',
  inputFields: {
    title: {
      type: GraphQLNonNull(GraphQLString),
    },
    content: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async (args: noteArguments, context) => {
    const { title, content } = args;
    const user = await getUserId(context.req);
    const newTodo = await Note.create({
      title,
      content,
      author: user,
    });

    return {
      id: newTodo._id,
      error: null,
    };
  },
  outputFields: {
    NoteEdge: {
      type: NoteConnection.edgeType,
      resolve: async ({ id }, _, context) => {
        const newNote = await load(context, id);

        if (!newNote) return null;

        return {
          cursor: toGlobalId('Note', newNote._id),
          node: newNote,
        };
      },
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
});

export default {
  ...mutation,
};
