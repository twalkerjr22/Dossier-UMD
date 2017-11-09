import React, {Component, PropTypes} from "react";
import ScrollableAnchor, {goToAnchor,configureAnchors} from 'react-scrollable-anchor';
import {PulseLoader} from 'halogenium'
import {
  Button,
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
  Input
} from 'semantic-ui-react'
import { LineChart, Line, Tooltip, XAxis, YAxis, CartesianGrid, Legend, PieChart, Pie } from 'recharts';

const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>
      <Menu.Item as='a' active>Home</Menu.Item>
      <Menu.Item as='a' >Features</Menu.Item>
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

export default class Homepage extends React.Component{

    //constructor to innitialize all of our initial data for the homepage
    constructor(props) {
     	 	super(props);

        /*Configuring scrolling anchor settings. We offset to account for the
        header*/
        configureAnchors({offset: -50, scrollDuration: 140})

        //Initializing our State react Object
        this.state = {
          Title: "Homepage",
          tweetDataVisible: false,
          searchInputShadow: "",
          searchInputVirtual: "",
          data01: [{name: 'Positive', value: 400}, {name: 'Negative', value: 300},
          {name: 'Neutral', value: 100}
          ],
          data02: [{name: 'Positive', value: 400},
                      {name: 'Negative', value: 300},  {name: 'Neutral', value: 100}],
          tweetPosFeeds: [{
            date: '1 Hour Ago',
            image: '/assets/images/avatar/small/elliot.jpg',
            meta: '4 Likes',
            summary: 'The new purple line is going to make my commute so much easier!',
        }, {
          date: '4 days ago',
          image: '/assets/images/avatar/small/justen.jpg',
          meta: '41 Likes',
          summary: 'We need better public transportation and thats what the purple line achieves',

        }],

        tweetNegFeeds: [

          {
            date: '4 days ago',
            image: '/assets/images/avatar/small/helen.jpg',
            meta: '1 Like',
            summary: "The purple line is going to destroy the UMD campus... don't do it",
          },
          {
            date: '3 days ago',
            image: '/assets/images/avatar/small/joe.jpg',
            meta: '8 Likes',
            summary: '@LarryHogan This new purple line is your worst plan ever.'
          },
        ],

        tweetData: [
            {name: '09/09', Negative: 90, Positive: 34, amt: 2400},
            {name: '09/10', Negative: 77, Positive: 55, amt: 2210},
            {name: '09/11', Negative: 46, Positive: 59, amt: 2290},
            {name: '09/12', Negative: 38, Positive: 81, amt: 2000},
            {name: '09/13', Negative: 20, Positive: 63, amt: 2181},
            {name: '09/14', Negative: 15, Positive: 30, amt: 2500},
            {name: '09/15', Negative: 10, Positive: 25, amt: 2100},
        ]

    };


        this.handleChange = this.handleChange.bind(this);
      	this.handleButton = this.handleButton.bind(this);

    }

    /*Functions to handle hidding the visibl of the navigation*/
    hideFixedMenu = () => this.setState({visible: false});
    showFixedMenu = () => this.setState({visible: true});

    showTweetData = () => this.setState({tweetDataVisible: true});
    hideTweetData = () => this.setState({tweetDataVisible: false});

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    handleChange(event) {
      	this.setState({ searchInputShadow: event.target.value });
      	console.log("this.state.searchInputShadow")
    }

    handleButton(event) {
    		/*When the search button is clicked we change twee data visible bool*/
        this.setState({tweetDataVisible: true});
        goToAnchor('dataSection');
    		/*document.getElementById("searchInfo").style.display = "block";*/
      	this.setState({ searchInputVirtual: this.state.searchInputShadow });

    	}
    render() {

      const { visible } = this.state
      const { tweetDataVisible} = this.state

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
              style={{ minHeight: 700, padding: '1em 0em'}}
              vertical
            >

            {/*Putting this menu in a container
            Helps keep things to a max with depending on the users
            screen. Restricts the Menu to a reasonable size for the
            display*/}
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item as='a' active>Home</Menu.Item>
                  <Menu.Item as='a' >Features</Menu.Item>
                  <Menu.Menu position='right'>
                    <Menu.Item className='item'>
                      <Button as='a'>Log in</Button>
                    </Menu.Item>
                    <Menu.Item>
                      <Button as='a' primary>Sign Up</Button>
                    </Menu.Item>
                  </Menu.Menu>
                </Menu>
                </Container>



              {/*A container used with Text*/}
              <Container text>
                <Header
                  as='h1'
                  content='Dossier'
                  inverted
                  style={{fontSize: '4em', fontWeight: 'normal',
                  marginBottom: 0, marginTop: '3em'}}
                />

                {/*Search bar to allow users to search for tweets*/}
                <Input fluid action={{ icon: 'search', onClick: this.handleButton}}
                placeholder='Search for tweets...' onChange = {this.handleChange}/>

              </Container>
            </Segment>
          </Visibility>


        {/*Section that displays data when a visitor searches for a tweet.
        The data section is hidden until the user searches. When the data is
        done loading, we display it below and show the section and then we autoscroll
        for the user to see the data*/}
        { tweetDataVisible && (

        <ScrollableAnchor id={'dataSection'}>

          <div id="searchInfo">

            <Divider horizontal
              style={{fontSize: '2em', fontWeight: 'normal',
              marginBottom: 0, marginTop: '2em'}}
            >{this.state.searchInputVirtual}</Divider>

            <Grid divided='vertically'>

            <Grid.Row columns={1} centered>

              <div id="tweetHome">

              <Statistic size='huge' >
                <Statistic.Value>356</Statistic.Value>
                <Statistic.Label><Header as='h1'>Tweets in last 24 hours</Header>
                </Statistic.Label>
              </Statistic>

            </div>

            </Grid.Row>

            <Grid.Row columns={3} centered>
            {/*Adding two columns to get the pie chart in the center.Tried
              other solutions and this little trick seemed to work*/}
            <Grid.Column></Grid.Column>

              <Grid.Column centered>
              <Header
                as='h1'
                content='Tweet Breakdown'
                style={{fontSize: '2em', fontWeight: 'normal',
                marginBottom: 0, marginTop: '.5em', textAlign:'center'}}
              />
                <PieChart width={800} height={400}>
                  <Pie data={this.state.data01} cx={200} cy={200} outerRadius={60}
                  fill="#8884d8"/>
                  <Pie data={this.state.data02} cx={200} cy={200} innerRadius={70}
                  outerRadius={90} fill="#82ca9d" label/>
                  <Tooltip></Tooltip>
               </PieChart>

              </Grid.Column>

            <Grid.Column></Grid.Column>
            </Grid.Row>

              <Grid.Row columns={2} centered>

                <Grid.Column>
                <Header
                  as='h2'
                  content='Positive Tweets'
                  centered
                  style={{fontSize: '2em', fontWeight: 'normal',
                  marginBottom: 0, marginTop: '.05em', textAlign:'center'}}
                />
                    <Feed events={this.state.tweetPosFeeds}/>
                </Grid.Column>

                <Grid.Column>
                <Header
                  as='h2'
                  content='Negative Tweets'
                  centered
                  style={{fontSize: '2em', fontWeight: 'normal',
                  marginBottom: 0, marginTop: '.05em', textAlign:'center'}}
                />
                    <Feed events={this.state.tweetNegFeeds}/>
                </Grid.Column>

                </Grid.Row>

              <Grid.Row columns={3} centered>
                {/*Adding two empty columns and the linchart in the middle
                as a way to get it dead center of the screen*/}
                <Grid.Column></Grid.Column>
                <Grid.Column>
                <Header
                  as='h1'
                  content='Day by Day'
                  style={{fontSize: '2em', fontWeight: 'normal',
                  marginBottom: 0, marginTop: '.5em', textAlign:'center'}}
                />
                  <LineChart width={800} height={300} data={this.state.tweetData}
                    margin={{top: 5, right: 400, left: 5, bottom: 5}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey="Positive" stroke="#8884d8" activeDot={{r: 8}}/>
                    <Line type="monotone" dataKey="Negative" stroke="#82ca9d" />
                </LineChart>
                </Grid.Column>
                <Grid.Column></Grid.Column>
              </Grid.Row>

              </Grid>

          </div>
        </ScrollableAnchor>
            )
          }

        </Container>
        </div>
      )
    }
  }
