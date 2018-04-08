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
    withRouter
} from "react-router-dom";
import smmImage from '../imgs/smm.jpg';
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
    Input,
    Form
} from 'semantic-ui-react'
import config from "../config";
import {
    CognitoUserPool,
    AuthenticationDetails,
    CognitoUser
} from "amazon-cognito-identity-js"
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


export default class MembersLogin extends React.Component {

    //constructor to innitialize all of our initial data for the homepage
    constructor(props) {
        super(props);



        //Initializing our State react Object
        this.state = {
            username: "",
            password: ""
        };

        //Wiring our handlers to our functions to handle event changes
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }

    /*Functions to handle hidding the visibl of the navigation*/
    hideFixedMenu = () => this.setState({
        visible: false
    });


    /*handleItemClick = (e, { name }) => this.setState({ activeItem: name });*/
    /*Making sure the user types in a valid username and password*/
    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    /*Function to set the username to the state that the user types in*/
    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        });
    }

    /*Function to set the password the user types in to the state*/
    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    /*Function that logs our user in using Amazon Cognito*/
    login(email, password) {

        /*Making a new user pool to connect to our pool of users on the server.*/
        /*USER_POOL_ID and APP_CLIENT_ID come from the config.js file*/
        const userPool = new CognitoUserPool({
            UserPoolId: config.cognito.USER_POOL_ID,
            ClientId: config.cognito.APP_CLIENT_ID
        });


        const user = new CognitoUser({
            Username: email,
            Pool: userPool
        });
        const authenticationData = {
            Username: email,
            Password: password
        };
        const authenticationDetails = new AuthenticationDetails(authenticationData);

        /*Returning the promise using the callbacks from AWS cognito*/
        /*This keeps us from having to get messy with Callbacks*/
        return new Promise((resolve, reject) =>
            user.authenticateUser(authenticationDetails, {
                onSuccess: result => resolve(),
                onFailure: err => reject(err)
            })
        );
    }

    //Handles when the user submits their information to log-in
    handleSubmit = async event => {
        event.preventDefault();

        try {
            /*Grabbing the username and password from the state and calling our login function*/
            /*We use wait to invoke that the login returns a promise.*/
            await this.login(this.state.username, this.state.password);

            //Telling the user they've been logged in
            alert("Logged in");
        } catch (e) {
            //Showing the error if there was one.
            alert(e);

        }
    }

    //RENDER FUNCTION STARTS
    render() {

        return (

          <div>
            <Container fluid>

                <Segment.Group centered size = 'small'>
                  <Grid>
                    <Grid.Row centered>
                      <Grid.Column width = {6}>
                        <Form onSubmit = {this.handleSubmit}>
                          <Form.Field >
                          <label> Username </label>
                          <input controlId = "email"
                            onChange =
                              {
                              this.handleUsernameChange
                              }
                              placeholder = 'Username' / >

                          </Form.Field>

                        <Form.Field>
                          <label > Password </label> <input onChange = {this.handlePasswordChange}
                            placeholder = 'Password'/ >
                        </Form.Field>

                        <Form.Field >
                          <div style = {{textAlign: "center", marginBottom: '.5em'}}>
                            <Button block primary type = 'submit'> Submit </Button>
                          </div >
                        </Form.Field>
                        </Form>
                    </Grid.Column >
                </Grid.Row>
            </Grid>
          </Segment.Group>
  </Container>
</div>
        )
    }
}
