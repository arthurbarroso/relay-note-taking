import React, { useState, useEffect } from 'react';

import { createRefetchContainer, RelayRefetchProp } from 'react-relay';
// import { Link } from 'react-router-dom';

// @ts-ignore
import graphql from 'babel-plugin-relay/macro';

import { Container, Content } from './styles/RefetchStyles';

import createQueryRenderer from '../golden-stack/createQueryRenderer';
import Layout from './_layout';

import { NoteRefetch_query } from './__generated__/NoteRefetch_query.graphql';

interface RelayProps {
  query: NoteRefetch_query;
  relay: RelayRefetchProp;
  isLoading: boolean;
}

let qTerms = '';
function NoteRefetch(props: RelayProps) {
  const [terms, setTerms] = useState('');
  const [count, setCount] = useState(12);

  function loadMore() {
    if (!props.isLoading) {
      props.relay.refetch(
        { search: qTerms, first: count },
        null,
        () => {
          setCount(count + 3);
        },
        { force: true }
      );
    }
  }

  window.onscroll = () => {
    if (window.scrollY <= 40) {
      loadMore();
    }
  };

  useEffect(() => {
    qTerms = terms;
    loadMore();
  }, [terms]);

  return (
    <Container>
      <input
        type="text"
        value={terms}
        onChange={e => setTerms(e.target.value)}
        placeholder="query terms"
      />
      <Content>
        {props?.query.notes.edges.map(item => (
          <div key={item?.node?.id}>
            <h1>{item?.node?.title}</h1>
            <h2>{item?.node?.content}</h2>
          </div>
        ))}
      </Content>
    </Container>
  );
}

const NoteRefetchContainer = createRefetchContainer(
  NoteRefetch,
  {
    query: graphql`
      fragment NoteRefetch_query on Query {
        notes(first: $first, search: $search)
          @connection(key: "Refetch_notes") {
          edges {
            node {
              id
              _id
              content
              title
              important
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    `,
  },
  graphql`
    query NoteRefetchPaginationQuery($first: Int, $search: String) {
      ...NoteRefetch_query
    }
  `
);

const Renderer = createQueryRenderer(NoteRefetchContainer, NoteRefetch, {
  query: graphql`
    query NoteRefetchQuery($first: Int, $search: String) {
      ...NoteRefetch_query
    }
  `,
  variables: { first: 9, search: qTerms },
});

export default function NoteRefetchRenderer() {
  return <Layout Child={Renderer} />;
}
