import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <h1>Notee</h1>
      </Link>
      <div className="wrapper">
        <Link to="/">About</Link>
        <Link to="/login">
          <button type="button">Login</button>
        </Link>
      </div>
    </Container>
  );
}
