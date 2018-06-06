import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Homepage';
import SearchPage from './containers/SearchResultsContainer';


export default ({ childProps }) => (
  <Switch><Route
    path="/"
    exact
    render={props => (
      <Home {...props} data={childProps} />
)}
  /> <Route
    path="/search"
    exact
    render={props => (
      <SearchPage {...props} data={childProps} />
)}
  />
  </Switch>);
