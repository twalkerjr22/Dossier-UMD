import React, { Component, PropTypes }  from 'react'
import { Container, Header, Input } from 'semantic-ui-react'


export default class MainContainer extends Component {

constructor() {
      super();
      this.state = {
       
      };
  }

render() {

  

  return(
   <div>
    <Container fluid>
      <img src="new-york-city-guide.jpg" />
      <Header as='h2'>Welcome to The Public Opinion Project!</Header>
      
      
    </Container>
  </div>
    )
}
}