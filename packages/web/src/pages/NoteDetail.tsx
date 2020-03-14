import React, { useEffect } from 'react';
import { QueryRenderer } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { Link } from 'react-router-dom';
import environment from '../environment';

import { Container, Content, Wrapper } from './styles/RefetchStyles';

import { NoteDetailQuery } from './__generated__/NoteDetailQuery.graphql';

interface Detail {
  match: {
    params: {
      id: String;
    };
  };
}

interface RelayProps {
  query: NoteDetailQuery;
  match: {
    params: {
      id: String;
    };
  };
}

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
            return <h1>{props.note.title}</h1>;
          }}
        />
      </Content>
      <Wrapper>
        <Link to="/refetch">
          <button type="button">BACK TO TODO LIST</button>
        </Link>
      </Wrapper>
    </Container>
  );
}

export default NoteDetailScreen;
