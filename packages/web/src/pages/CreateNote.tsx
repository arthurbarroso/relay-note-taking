import React, { useState } from 'react';
import { commitMutation } from 'react-relay';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import environment from '../environment';
import history from '../routes/history';

import { Container, Content } from './styles/CreateNoteStyles';

const mutation = graphql`
  mutation CreateNoteMutation($input: createNoteInput!) {
    createNote(input: $input) {
      NoteEdge {
        node {
          id
          title
          content
          author {
            username
          }
        }
      }
    }
  }
`;

function commit(title: string, content: string) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: { title, content },
    },
    onCompleted: (_, errors) => {
      if (errors) {
        toast.error('😔 Something went wrong, please try again later');
        return;
      }
      toast.success('🚀 Note created successfully!');
      history.push('/notes');
    },
  });
}

export default function CreateNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <>
      <Container>
        <Content>
          <form>
            <span>Note title:</span>
            <input
              name="title"
              placeholder="cool title"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
            <span>Note content:</span>
            <input
              name="content"
              placeholder="things u want to write down"
              value={content}
              onChange={event => setContent(event.target.value)}
            />
            <button type="button" onClick={() => commit(title, content)}>
              Create
            </button>
          </form>
          <p>
            <Link to="notes">Dont want to create a new note? Go back</Link>
          </p>
        </Content>
      </Container>
    </>
  );
}
