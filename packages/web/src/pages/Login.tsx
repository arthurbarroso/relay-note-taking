import React, { useState, useEffect } from 'react';
import { commitMutation } from 'react-relay';
import { Link } from 'react-router-dom';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { toast } from 'react-toastify';
import { Container, Content } from './styles/AuthStyles';
import environment from '../environment';
import history from '../routes/history';

import { LoginMutationResponse } from './__generated__/LoginMutation.graphql';

interface dProps {
  login: {
    token: String;
  };
}

const mutation = graphql`
  mutation LoginMutation($input: AuthInput!) {
    login(input: $input) {
      token
    }
  }
`;

function handler(props: any, setToken: Function) {
  setToken(props.login.token);
}

function commit(username: String, password: String, setToken: Function) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: { username, password },
    },
    onCompleted: (response, errors) => {
      if (errors) {
        toast.error('😔 Something went wrong, please try again later');
        return;
      }
      setToken(response);
      handler(response, setToken);
    },
  });
}

export default function Login() {
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (token.length > 0) {
      localStorage.setItem(
        process.env.STORAGE_ITEM_KEY
          ? process.env.STORAGE_ITEM_KEY
          : 'appnoteerelay',
        token
      );
      history.push('/notes');
    }
  }, [token]);

  return (
    <>
      <Container>
        <Content>
          <form>
            <img src="https://i.imgur.com/OQMbe4j.png" alt="login" />
            <span>Username:</span>
            <input
              name="username"
              placeholder="cooluser"
              value={username}
              onChange={event => setUsername(event.target.value)}
            />
            <span>Password:</span>
            <input
              name="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
            <button
              onClick={() => commit(username, password, setToken)}
              type="button"
            >
              Login
            </button>
          </form>
          <p>
            <Link to="/signup">Does not have an account? Sign up</Link>
          </p>
        </Content>
      </Container>
    </>
  );
}
