import React, { useEffect } from 'react';
import { QueryRenderer } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { Link } from 'react-router-dom';
import environment from '../environment';

import { Container, Content, Wrapper } from './styles/RefetchStyles';

import {
  NoteDetailQuery,
  NoteDetailQueryResponse,
} from './__generated__/NoteDetailQuery.graphql';

interface RelayProps {
  match: {
    params: {
      id: String;
    };
  };
}

interface Renderer {
  query: NoteDetailQueryResponse;
}

const NoteRenderer = (props: Renderer) => {
  const { query } = props;
  const { note } = query;
  return (
    <>
      <h1>{note?.title}</h1>
      <p>{note?.content}</p>
    </>
  );
};

function NoteDetailScreen(thisProps: RelayProps) {
  const { match } = thisProps;
  const { id } = match.params;
  return (
    <Container>
      <Content>
        <QueryRenderer
          environment={environment}
          query={graphql`
            query NoteDetailQuery($id: ID!) {
              note(id: $id) {
                id
                content
                title
                _id
                important
              }
            }
          `}
          variables={{ id }}
          render={({ error, props }) => {
            if (error) {
              return <div>Error!</div>;
            }
            if (!props) {
              return <div>Loading...</div>;
            }

            // @ts-ignore
            return <NoteRenderer query={props} />;
          }}
        />
      </Content>
      <Wrapper>
        <Link to="/notes">
          <button type="button">BACK TO NOTE LIST</button>
        </Link>
      </Wrapper>
    </Container>
  );
}

export default NoteDetailScreen;
