import React, {Component, PropTypes} from "react";
import ScrollableAnchor, {goToAnchor,configureAnchors} from 'react-scrollable-anchor';
import {PulseLoader} from 'halogenium'
import {BrowserRouter as Router,
  Route,
  Link,withRouter} from "react-router-dom";
import smmImage from './imgs/smm.jpg';
import {
  Button,
  Text,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Feed,
  Statistic,
  Segment,
  Visibility,
  Dropdown,
  Input
} from 'semantic-ui-react'

import { LineChart, Line, Tooltip, XAxis, YAxis, CartesianGrid, Legend, PieChart, Pie } from 'recharts';


//Button in the menu used for logging in. We inject it into the html
//Where we want to use it.
const LogInButton = withRouter(({ history}) => (
  <Button
    type='button' primary
    onClick={() => { history.push('/memberslogin') }}
  >
    Log In!
  </Button>
))

//Fixed menu we show when the user starts scrolling down the page
const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>
      <Menu.Item as='a'>
        <Link to="/Home">Home</Link>
      </Menu.Item>
      <Dropdown text='Solutions' pointing className='link item' active>
      <Dropdown.Menu>
          <Dropdown.Item active>
          <Link inverted to="/SocialMediaMonitoring"
            style={{color:'black'}}>Social Media Monitoring </Link>
          </Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
      <Menu.Menu position='right'>
        <Menu.Item className='item'>
          <Button as='a'>Log in</Button>
        </Menu.Item>
        <Menu.Item>
          <Button as='a' primary>Sign Up</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
   </Menu>
 )

export default class SocialMediaMonitoring extends React.Component{

    //constructor to innitialize all of our initial data for the homepage
    constructor(props) {
     	 	super(props);

        /*Configuring scrolling anchor settings. We offset to account for the
        header*/
        configureAnchors({offset: -50, scrollDuration: 140})

        //Initializing our State react Object
        this.state = {
          Title: "Social Media Monitoring",
          tweetDataVisible: false,
          searchInputShadow: "",
          searchInputVirtual: ""

    };

        //Wiring our handlers to our functions to handle event changes
        this.handleChange = this.handleChange.bind(this);
      	this.handleButton = this.handleButton.bind(this);

    }

    /*Functions to handle hidding the visibl of the navigation*/
    hideFixedMenu = () => this.setState({visible: false});
    showFixedMenu = () => this.setState({visible: true});

    showTweetData = () => this.setState({tweetDataVisible: true});
    hideTweetData = () => this.setState({tweetDataVisible: false});

    /*handleItemClick = (e, { name }) => this.setState({ activeItem: name });*/

    handleChange(event) {
      	this.setState({ searchInputShadow: event.target.value });
      	console.log("this.state.searchInputShadow")
    }

    handleButton(event) {

    	}

    //RENDER FUNCTION STARTS
    render() {

      const { visible } = this.state


      return (

        <div>
          {/*If visible var is true, we show the fixed menu */}
          { visible ? <FixedMenu/> : null}

          {/*Using the Visibility import to see when we need to show the fixed menu*/}
        <Container fluid>
          <Visibility
            onBottomPassed = {this.showFixedMenu}
            onBottomVisible = {this.hideFixedMenu}
            once={false}
          >
            {/*Grouping all homepage content with segment*/}
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 600,padding: '1em 0em'}}
              vertical
            >

            {/*Putting this menu in a container
            Helps keep things to a max with depending on the users
            screen. Restricts the Menu to a reasonable size for the
            display*/}
              <Container>
                <Menu inverted style={{height: 65}} pointing secondary size='large' fluid>
                  <Menu.Item as='a' >
                  <Link style={{fontSize: '1.4em', marginBottom:'.1em', fontWeight: 'normal'}} to="/Home">Home</Link>
                  </Menu.Item>
                  <Dropdown style={{fontSize: '1.4em', fontWeight: 'normal'}} text='Solutions' pointing className='link item'>
                  <Dropdown.Menu>
                      <Dropdown.Item>
                      <Link inverted to="/SocialMediaMonitoring"
                      style={{color:'black',fontSize: '.7em'}}>Social Media Monitoring</Link>
                      </Dropdown.Item>
                  </Dropdown.Menu>
                  </Dropdown>
                  <Menu.Menu position='right'>
                    <Menu.Item className='item'>
                      <LogInButton></LogInButton>
                    </Menu.Item>
                    <Menu.Item>
                      <Button as='a' color='orange'>Sign Up</Button>
                    </Menu.Item>
                  </Menu.Menu>
                </Menu>
                </Container>



              {/*A container used with Text*/}
              <Container style={{height: '50px'}}>
                <Header
                  as='h2'
                  content='Social Media Monitoring'
                  inverted
                  style={{fontSize: '2em', fontWeight: 'normal',
                  marginBottom: 0, marginTop: '5em', backgroundColor:'transparent'}}
                />
                <Header
                  as='h1'
                  content='Proactive social monitoring automatically surfaces relevant'
                  inverted
                  style={{fontSize: '3em', fontWeight: 'normal',
                  marginBottom: 0, marginTop: '1em',backgroundColor:'transparent'}}
                />
              </Container>
            </Segment>
          </Visibility>

          <div id="title">

          <Header color='blue'
            as='h2'
            content='Before you act, you have to listen'
            centered
            style={{fontSize: '3em', fontWeight: 'normal',
            marginBottom: '1em', marginTop: '1em', textAlign:'center'}}
          />
          <Divider />
          <Grid centered='true' fluid>


            <Grid.Row columns={3}>

                <Grid.Column >

                <div style={{textAlign:'center'}}>
                <Icon name='area graph' circular color='teal' size='big'/>
                </div>

                  <Header
                    as='h1'
                    content='Crisis Management'
                    style={{fontSize: '1.4em', fontWeight: 'normal',
                    marginBottom: '.5em', marginTop: '.5em', textAlign:'center',
                    color:'orange'}}
                  />
                  <div style={{textAlign:'center'}}>
                  Receive an automatic alert when a
                  crisis<br></br>
                  begins to trend so you can act
                  quickly to protect your brand</div>

                  </Grid.Column>

                  <Grid.Column>
                  <div style={{textAlign:'center'}}>
                    <Icon name='rocket' circular color='teal' size='big'/>
                    </div>
                  <Header
                    as='h1'
                    content='Campaign Monitoring'
                    style={{fontSize: '1.4em', fontWeight: 'normal',
                    marginBottom: '.8em', marginTop: '.5em', textAlign:'center',
                    color:'orange'}}
                  />
                  <div style={{textAlign:'center'}}>
                  Monitor campaigns, benchmark against past performance,
                  <br></br>
                  and utilize reporting to share data
                  </div>
                  </Grid.Column>

                  <Grid.Column >

                    <div style={{textAlign:'center'}}>
                    <Icon name='spy' circular color='teal' size='big'/>
                    </div>

                    <Header
                      as='h1'
                      content='Influencer Identification'
                      style={{fontSize: '1.4em', fontWeight: 'normal',
                      marginBottom: '.5em', marginTop: '.5em', textAlign:'center',
                      color:'orange'}}
                    />
                    <div style={{textAlign:'center'}}>
                    Receive an automatic alert when a
                    crisis<br></br>
                    begins to trend so you can act
                    quickly to protect your brand</div>
                  </Grid.Column>

            </Grid.Row>

            <Grid.Row columns={2}>

              <Grid.Column >
                <div style={{textAlign:'center'}}>
                <Icon name='alarm' circular color='teal' size='big'/>
                </div>

                <Header
                  as='h1'
                  content='Crisis Management'
                  style={{fontSize: '1.4em', fontWeight: 'normal',
                  marginBottom: '.5em', marginTop: '.5em', textAlign:'center',
                  color:'orange'}}
                />
                <div style={{textAlign:'center'}}>
                Receive an automatic alert when a
                crisis<br></br>
                begins to trend so you can act
                quickly to protect your brand</div>
              </Grid.Column>

              <Grid.Column >

                <div style={{textAlign:'center'}}>
                <Icon name='spy' circular color='teal' size='big'/>
                </div>

                <Header
                  as='h1'
                  content='Influencer Identification'
                  style={{fontSize: '1.4em', fontWeight: 'normal',
                  marginBottom: '.5em', marginTop: '.5em', textAlign:'center',
                  color:'orange'}}
                />
                <div style={{textAlign:'center'}}>
                Receive an automatic alert when a
                crisis<br></br>
                begins to trend so you can act
                quickly to protect your brand</div>
              </Grid.Column>

            </Grid.Row>

          </Grid>

          </div>

        </Container>
        </div>
      )
    }
  }
