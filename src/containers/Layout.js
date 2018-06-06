import React from 'react';
import { withRouter } from 'react-router-dom';
import Homepage from '../containers/Homepage';

import Header from '../components/layout/Header';


class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header props />
        <Homepage />
      </div>
    );
  }
}

export default withRouter(Layout);
