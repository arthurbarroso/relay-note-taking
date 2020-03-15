import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NoteRefetch from '../pages/NoteRefetch';
import NoteDetail from '../pages/NoteDetail';
import CreateNote from '../pages/CreateNote';

export default function Routes() {
  return (
    <Switch>
      <Route path="/new" component={CreateNote} isPrivate />
      <Route exact path="/" component={Landing} isPrivate={false} />
      <Route path="/login" component={Login} isPrivate={false} />
      <Route path="/signup" component={Register} isPrivate={false} />
      <Route exact path="/notes" component={NoteRefetch} isPrivate />
      <Route exact path="/notes/:id" component={NoteDetail} isPrivate />
    </Switch>
  );
}
