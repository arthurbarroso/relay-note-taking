import { mongooseLoader, connectionFromMongoCursor } from "@entria/graphql-mongoose-loader"; //eslint-disable-line
import DataLoader from 'dataloader';
import { ConnectionArguments, toGlobalId } from 'graphql-relay';
import User, { UserModel } from './UserModel';
import GraphQLContext from '../../types/GraphQLContext';
import Note, { NoteModel } from '../notes/NoteModel';
import { load as noteloader } from '../notes/NoteLoader';

export default class Userind {
  id: string;

  _id: string;

  username: string;

  email: string;

  password: string;

  createdAt: Date;

  updatedAt: Date;

  constructor(data: UserModel) {
    this.id = data.id || data._id;
    this._id = data._id;
    this.username = data.username;
    this.email = data.email;
    this.password = data.password;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
}

export const getLoader = () =>
  new DataLoader(ids => mongooseLoader(User, ids as any));

export const load = async (context, id): Promise<UserModel> => {
  if (!id) {
    return null;
  }

  try {
    const data = User.findOne({ _id: id });

    if (!data) return null;

    return data;
  } catch (err) {
    return null;
  }
};

export const loadUsers = async (
  context: GraphQLContext,
  args: ConnectionArguments
) => {
  const where = args.search
    ? {
      // eslint-disable-line
      username: { // eslint-disable-line
        $regex: new RegExp(`^${args.search}`, 'ig'), // eslint-disable-line
      }, // eslint-disable-line
    } // eslint-disable-line
    : {};
  const users = User.find(where, { _id: 1 }).sort({
    createdAt: -1,
  });
  const t = await connectionFromMongoCursor({
    cursor: users,
    context,
    args,
    loader: load,
  });

  return t;
};

export async function getNotes(
  parentValues: any,
  args: any,
  context: any,
  info: any
): Promise<NoteModel> {
  const notes = Note.find({ author: parentValues._id });
  const t = await connectionFromMongoCursor({
    cursor: notes,
    context,
    args,
    loader: noteloader,
  });
  return t;
}
