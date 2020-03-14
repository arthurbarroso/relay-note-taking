import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import DefaultLayout from '../pages/_layout';

type Props = {
  component: React.ReactType;
  isPrivate?: boolean;
  exact?: boolean;
  path: string;
};

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}: Props) {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = DefaultLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
