import React, { Component, PropTypes } from 'react';
import { Container, Header, Input, Divider, Grid, Image, Feed, Statistic, Icon } from 'semantic-ui-react';
import { LineChart, Line,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie } from 'recharts';
import './App.css';
import MenuStackable from './MenuStackable.js';
import MainContainer from './MainContainer.js';


class App extends Component {

	constructor(props) {
   	 	super(props);
    	this.state = {
    		searchInputShadow: "",
    		searchInputVirtual: "", 
    		data01: [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}],
    		data02: [{name: 'A1', value: 100},
                    {name: 'A2', value: 300},
                   {name: 'B1', value: 100},
                   {name: 'B2', value: 80},
                   {name: 'B3', value: 40},
                   {name: 'B4', value: 30},
                   {name: 'B5', value: 50},
                  {name: 'C1', value: 100},
                  {name: 'C2', value: 200},
                   {name: 'D1', value: 150},
                   {name: 'D2', value: 50}],
    		tweetFeeds: [{
			  	date: '1 Hour Ago',
			  	image: '/assets/images/avatar/small/elliot.jpg',
			  	meta: '4 Likes',
			  	summary: 'The new purple line is going to make my commute so much easier!',
			}, {
			  date: '4 days ago',
			  image: '/assets/images/avatar/small/helen.jpg',
			  meta: '1 Like',
			  summary: "The purple line is going to destroy the UMD campus... don't do it",
			}, {
			  date: '3 days ago',
			  image: '/assets/images/avatar/small/joe.jpg',
			  meta: '8 Likes',
			  summary: '@LarryHogan This new purple line is your worst plan ever.'		 
			}, {
			  date: '4 days ago',
			  image: '/assets/images/avatar/small/justen.jpg',
			  meta: '41 Likes',
			  summary: 'We need better public transportation and thats what the purple line achieves',
			 
			}],
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

	handleChange(event) {
    	this.setState({ searchInputShadow: event.target.value });
    	console.log("this.state.searchInputShadow")
  	}
  	handleButton(event) {
  		console.log("HERE");
  		document.getElementById("searchInfo").style.display = "block";
    	this.setState({ searchInputVirtual: this.state.searchInputShadow });
    	
  	}
  render() {
  	console.log(this.state.searchInputVirtual);
    return (
      <div className="App">

    <MenuStackable/>
    <MainContainer/>
    <Input fluid action={{ icon: 'search', onClick: this.handleButton}} placeholder='Search for tweets...' onChange = {this.handleChange}/>
    	<div id="searchInfo">
    	<Divider horizontal>{this.state.searchInputVirtual}</Divider>
    	<Grid divided='vertically'>
    <Grid.Row columns={2}>
      <Grid.Column>
        <Feed events={this.state.tweetFeeds}/>
      </Grid.Column>
	      <Grid.Column>
		  <LineChart width={600} height={300} data={this.state.tweetData}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="Positive" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="Negative" stroke="#82ca9d" />
      </LineChart>
	  </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={3}>
      <Grid.Column>
        <PieChart width={800} height={400}>
        <Pie data={this.state.data01} cx={200} cy={200} outerRadius={60} fill="#8884d8"/>
        <Pie data={this.state.data02} cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label/>
       </PieChart>
      </Grid.Column>
      <Grid.Column>
     	<div id="tweetHome">
       <Statistic size='huge' >
      <Statistic.Value>356</Statistic.Value>
      <Statistic.Label><Header as='h1'>Tweets in last 24 hours</Header></Statistic.Label>
    </Statistic>
    </div>
      </Grid.Column>
      <Grid.Column>
	      <div id="signupHome">
		   <Header as='h1' icon>
		    <Icon name='settings' />
		    Sign Up for more detailed statistics!
		  </Header>
		  </div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
    	</div>
      </div>
    );
  }
}

export default App;
