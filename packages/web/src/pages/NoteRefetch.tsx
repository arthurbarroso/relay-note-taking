import React, { useState, useEffect } from 'react';

import { createRefetchContainer } from 'react-relay';
// import { Link } from 'react-router-dom';

// @ts-ignore
import graphql from 'babel-plugin-relay/macro';

import createQueryRenderer from '../golden-stack/createQueryRenderer';
import Layout from './_layout';

let qTerms = '';
// @ts-ignore
function NoteRefetch(props) {
  const [terms, setTerms] = useState('');
  const [count, setCount] = useState(12);
  // console.log(props)

  useEffect(() => {
    qTerms = terms;
  }, [terms]);

  console.log(props); //eslint-disable-line

  function loadMore() {
    if (!props.history.isLoading) {
      props.relay.refetch(
        { search: qTerms, first: count },
        null,
        () => {
          setCount(count + 3);
        },
        { force: true }
      );
    } else {
      console.log('loadmore else'); //eslint-disable-line
    }
  }

  window.onscroll = () => {
    if (window.scrollY <= 40) {
      loadMore();
    } else {
      console.log('on scroll else');
    }
  };

  return <h1>notes</h1>;
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
