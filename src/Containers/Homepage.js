import React, {
    Component,
    PropTypes
} from "react";
import ScrollableAnchor, {
    goToAnchor,
    configureAnchors
} from 'react-scrollable-anchor';
import {
    PulseLoader
} from 'halogenium'
import {
    BrowserRouter as Router,
    Route,
    Link,
    History as history,
    withRouter
} from "react-router-dom";
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


import {
    LineChart,
    Line,
    Tooltip,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    PieChart,
    Pie
} from 'recharts';

//Button in the menu used for logging in. We inject it into the html
//Where we want to use it.
const LogInButton = withRouter(({
    history
}) => ( <Button type = 'button' primary onClick = { () => {history.push('/memberslogin')
        }
    } >
    Log In!
    </Button>
))


//Fixed menu we show when the user starts scrolling down the page
const FixedMenu = () => (
  <Menu fixed = 'top' size = 'large' >

    <Container>

      <Menu.Item as = 'a' active >
        <Link to = "/Home" > Home </Link>
      </Menu.Item >

      <Menu.Menu position = 'right' >

        <Menu.Item className = 'item' >
          <Button as = 'a' > Log in </Button>
        </Menu.Item >
        <Menu.Item >
          <Button as = 'a'primary > Sign Up </Button>
        </Menu.Item >
      </Menu.Menu>
    </Container>
  </Menu>
)
''

class Homepage extends React.Component {

    //constructor to innitialize all of our initial data for the homepage
    constructor(props) {
        super(props);

        /*Configuring scrolling anchor settings. We offset to account for the
        header*/
        configureAnchors({
            offset: -50,
            scrollDuration: 140
        })

        //Initializing our State react Object
        /*Most of the data here is dummy tweet data, eventually these fields
        will be populated with queries from the users*/
        this.state = {
            isAuthenticated: false,
            Title: "Homepage",
            tweetDataVisible: false,
            searchInputShadow: "",
            searchInputVirtual: "",
            data01: [{
                    name: 'Positive',
                    value: 400
                }, {
                    name: 'Negative',
                    value: 300
                },
                {
                    name: 'Neutral',
                    value: 100
                }
          ],
            data02: [{
                    name: 'Positive',
                    value: 400
                },
                {
                    name: 'Negative',
                    value: 300
                }, {
                    name: 'Neutral',
                    value: 100
                }],
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
                {
                    name: '09/09',
                    Negative: 90,
                    Positive: 34,
                    amt: 2400
                },
                {
                    name: '09/10',
                    Negative: 77,
                    Positive: 55,
                    amt: 2210
                },
                {
                    name: '09/11',
                    Negative: 46,
                    Positive: 59,
                    amt: 2290
                },
                {
                    name: '09/12',
                    Negative: 38,
                    Positive: 81,
                    amt: 2000
                },
                {
                    name: '09/13',
                    Negative: 20,
                    Positive: 63,
                    amt: 2181
                },
                {
                    name: '09/14',
                    Negative: 15,
                    Positive: 30,
                    amt: 2500
                },
                {
                    name: '09/15',
                    Negative: 10,
                    Positive: 25,
                    amt: 2100
                },
        ]

        };

        //Wiring our handlers to our functions to handle event changes
        this.handleChange = this.handleChange.bind(this);
        this.handleButton = this.handleButton.bind(this);

    }

    /*Functions to handle hidding the visibl of the navigation*/
    hideFixedMenu = () => this.setState({
        visible: false
    });

    showFixedMenu = () => this.setState({
        visible: true
    });

    showTweetData = () => this.setState({
        tweetDataVisible: true
    });
    hideTweetData = () => this.setState({
        tweetDataVisible: false
    });

    /*function to handle event changes with searching for tweets*/
    handleChange(event) {
        this.setState({
            searchInputShadow: event.target.value
        });
        console.log("this.state.searchInputShadow")
    }

    /*Handling our login button. loads our members login page*/
    handleLogInButton(event) {

      this.props.history.push('/memberslogin')

    }

    handleButton(event) {

        /*document.getElementById("searchInfo").style.display = "block";*/
        this.props.history.push({pathname: '/searchresults', state: {searchTerm: this.state.searchInputShadow}});

        this.setState({
            searchInputVirtual: this.state.searchInputShadow
        });



    }



    //RENDER FUNCTION STARTS
    render() {

        const {
            visible
        } = this.state

        return (

            <div>

            {/*Grouping all homepage content with segment*/ }
            <Segment inverted textAlign = 'center' style = {
                {
                    minHeight: 700,
                    padding: '1em 0em'
                }
            } vertical>


          { /*A container used with Text*/ }
          <Container fluid text >
            <Header as = 'h1' content = 'Dossier' inverted style = {
              {
                    fontSize: '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: '3em'
                }
              }/>

            { /*Search bar to allow users to search for tweets*/ }
            <Input fluid action = {
                {
                    icon: 'search',
                    onClick: this.handleButton
                }
            }
            placeholder = 'Search for tweets...'
            onChange = {
                this.handleChange
            }/>

          </Container>
        </Segment>



    </div >

        )

      //end of render function for homepage
      }

}
export default withRouter(Homepage);
