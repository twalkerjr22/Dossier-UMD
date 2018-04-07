import React, { Component, PropTypes } from 'react';
import { Container, Header, Input, Divider, Grid, Image, Feed, Statistic, Icon } from 'semantic-ui-react';
import { LineChart, Line,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie } from 'recharts';
import './App.css';
import Routes from './Routes';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect, withRouter
} from "react-router-dom";

import {
    Button,
    List,
    Menu,
    Segment,
    Visibility
} from 'semantic-ui-react'



class App extends Component {

	constructor(props) {

   	 	super(props);

    	this.state = {

            isAuthenticated: false,

			};

			this.handleLogInButton = this.handleLogInButton.bind(this);
			this.handleSignUpButton = this.handleSignUpButton.bind(this);
  	}

		userHasAuthenticated = authenticated => {
		  this.setState({ isAuthenticated: authenticated });
		}


		handleLogInButton = () => {this.props.history.push({pathname: '/login', state: {searchTerm: this.state.searchInputShadow}})};
		handleSignUpButton = () => {this.props.history.push('/login')};

		render( ){

			{/*Putting this menu in a container.
				Helps keep things to a max with depending on the users
				screen. Restricts the Menu to a reasonable size for the display*/}
	return(

 		<div>

			<Menu inverted pointing secondary size = 'large'>
				<Menu.Item as = 'a'>
					< Link class='menu' style = {
						{
							fontSize: '1.4em',
							marginBottom: '.1em',
							fontWeight: 'bold',
							color: 'black'
						}
					}
					to = "/"> Home </Link>
				</Menu.Item >

				<Menu.Menu position = 'right' >
					<Menu.Item className = 'item' >
						{/*Custom Button var named LoginButton at the top of the class*/}

						</Menu.Item>
						<Menu.Item>
						<Button animated type = 'button' primary onClick = {this.handleLogInButton}
						     >
								<Button.Content visible>Log in</Button.Content>
									<Button.Content hidden>
										<Icon name='right arrow' />
									</Button.Content>
						    </Button>
						</Menu.Item >
						<Menu.Item>
						<Button animated type = 'button' primary onClick = {this.handleLogInButton}
								 >
								<Button.Content visible>Sign Up</Button.Content>
									<Button.Content hidden>
										<Icon name='right arrow' />
									</Button.Content>
								</Button>
						</Menu.Item >
				</Menu.Menu>
			</Menu>

		<Routes/>

		</div>

	 );

		}

}


export default withRouter(App);
