import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Containers/Homepage.js"
import Login from "./Containers/LoginPage";
import SearchResultsContainer from './Containers/SearchResultsContainer'
import {

    Container

} from 'semantic-ui-react'
export default () =>

  <Switch>
    <Route path="/" exact component={Homepage} />
    <Route path="/login" exact component={Login} />
    <Route path="/searchresults" exact component={SearchResultsContainer} />
  </Switch>

  ;
