import mongoose, { Document, Schema } from 'mongoose';

export type NoteModel = Document & {
  title: string;
  content: string;
  author: String;
};

const NoteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      hidden: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<NoteModel>('Note', NoteSchema);
