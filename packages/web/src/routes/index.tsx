import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Landing from '../pages/Landing';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} isPrivate={false} />
    </Switch>
  );
}
