import React, { useState, useEffect } from 'react';
import { commitMutation } from 'react-relay';
import { Link } from 'react-router-dom';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { Container, Content } from './styles/AuthStyles';
import environment from '../environment';
// import history from '../routes/history';

import Layout from './_layout';

const mutation = graphql`
  mutation LoginMutation($input: AuthInput!) {
    login(input: $input) {
      token
    }
  }
`;

// @ts-ignore
function commit(username, password, setToken) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: { username, password },
    },
    onCompleted: (response, errors) => {
      if (errors) {
        return;
      }
      setToken(response);
    },
  });
}

function LoginScreen() {
  const [token, setToken] = useState({
    login: {
      token: '',
    },
  });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (token !== null && token.login.token.length > 0) {
      if (token.login.token !== null) {
        const bearer = token?.login.token;
        // console.log('token', bearer);
        // localStorage.setItem('token', bearer);
      }
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

export default function Login() {
  return <Layout Children={LoginScreen} />;
}
