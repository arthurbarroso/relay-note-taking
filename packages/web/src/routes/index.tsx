import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Register from '../pages/Register';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} isPrivate={false} />
      <Route path="/login" component={Login} isPrivate={false} />
      <Route path="/signup" component={Register} isPrivate={false} />
    </Switch>
  );
}
