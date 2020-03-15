import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container } from './styles';
import history from '../../routes/history';

export default function Header() {
  const signed = localStorage.getItem(
    process.env.STORAGE_ITEM_KEY
      ? process.env.STORAGE_ITEM_KEY
      : 'appnoteerelay'
  );
  /* eslint-disable */
  return (
    <Container>
      <Link to="/">
        <h1>Notee</h1>
      </Link>
      <div className="wrapper">
        {signed ? (
          <>
            <Link to="/new">
              <button type="button">NEW NOTE</button>
            </Link>
            <button type="button" onClick={() => {
              localStorage.removeItem(process.env.STORAGE_ITEM_KEY
                ? process.env.STORAGE_ITEM_KEY
                : 'appnoteerelay');
              history.push('/');
              toast.success('Logged out!');
            }}>LOGOUT</button>
          </>
        ) : (
            <Link to="/login">
              <button type="button">Login</button>
            </Link> //eslint-disable-line
          )}
      </div>
    </Container>
  );
}
