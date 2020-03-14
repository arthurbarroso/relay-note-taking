import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './routes/history';
import GlobalStyle from './styles/global';

export default function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}
