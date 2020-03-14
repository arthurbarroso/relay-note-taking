import React from 'react';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <h1>Notee</h1>
      <div className="wrapper">
        <h2>About</h2>
        <button type="button">
          <h2>Login</h2>
        </button>
      </div>
    </Container>
  );
}
