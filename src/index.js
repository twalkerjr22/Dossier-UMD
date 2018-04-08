import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './Containers/Homepage';
import MembersLogin from './Containers/LoginPage';
import SocialMediaMonitoring from './SocialMediaMonitoring'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import App from './App'
import registerServiceWorker from './registerServiceWorker';
import {
    Container

} from 'semantic-ui-react'

/*
  Creating our react router to route all of our pages.
  We use a container called Layout.js that all of our other layouts load into.
  Example: When first land on the site, the homagepage.js is loaded into the
  layout. If we click another link, that new page is then loaded into the Layout.js
  container.
  Adding Routes: Adding routes is easy. All pages must be added to the
  <Router> as a <Route Path>.
  */

ReactDOM.render(

  <Router>

    <App />

  </Router>
  ,
    document.getElementById("root")
);
registerServiceWorker();
