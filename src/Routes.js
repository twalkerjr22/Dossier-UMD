import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Homepage';
import SearchPage from './containers/SearchResultsContainer';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import CreateProject from './containers/CreateProject';

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
    <Route
      path="/Login"
      exact
      render={props => (
        <Login {...props} data={childProps} />
)}
    />
    <Route
      path="/Dashboard"
      exact
      render={props => (
        <Dashboard {...props} data={childProps} />
)}
    />
    <Route
      path="/CreateProject"
      exact
      render={props => (
        <CreateProject {...props} data={childProps} />
)}
    />
  </Switch>);
