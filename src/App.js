import React from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
// import Homepage from './containers/Homepage';
import Routes from './Routes';
import Header from './components/layout/Header';


const childProps = {
  searchTerm: '',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header parentProps={this.props} />
        <Routes childProps={childProps} />

      </div>
    );
  }
}

export default withRouter(App);
