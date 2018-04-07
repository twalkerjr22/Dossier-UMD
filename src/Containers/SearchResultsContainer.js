
import React, {
    Component,
    PropTypes
} from "react";
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

export default class SearchResultsContainer extends React.Component {


constructor(){
  super();
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

}



render(){

    return(
         <div>
            {this.renderSearchData()}
         </div>
    );
}

renderSearchData(){

    return(

      <div id = "searchInfo" >
        <Divider horizontal style = {
            {
                fontSize: '2em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: '2em'
            }
            } >

            {this.props.location.state.searchTerm}

        </Divider>

        <Grid divided = 'vertically' >

          <Grid.Row columns = {1}  >

            <div id = "tweetHome" >
              <Statistic size = 'huge' >
                <Statistic.Value > 356 </Statistic.Value>
                <Statistic.Label >
                < Header as = 'h1' > Tweets in last 24 hours </Header>
                </Statistic.Label >
              </Statistic>
            </div>

          </Grid.Row>

          <Grid.Row columns = {3}   >

            {/*Adding two columns to get the pie chart in the center.Tried
              other solutions and this little trick seemed to work*/
            }

            <Grid.Column ></Grid.Column>

            <Grid.Column >
              <Header as = 'h1' content = 'Tweet Breakdown'
              style = {
                {
                fontSize: '2em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: '.5em',
                textAlign: 'center'
                }
              }/>

              <PieChart width = {800} height = {400}>

                <Pie data = {this.state.data01} cx = {200} cy = {200} outerRadius = {60}
                fill = "#8884d8" dataKey="value"/ >

                <Pie data = {this.state.data02} cx = {200} cy = {200} innerRadius = {70}
                outerRadius = {90} fill = "#82ca9d" label  dataKey="value"/ >
                <Tooltip > </Tooltip>
              </PieChart >
            </Grid.Column>

      <Grid.Column > </Grid.Column>

    </Grid.Row>

    <Grid.Row columns = {2} >
      <Grid.Column>
        <Header as = 'h2' content = 'Positive Tweets'
          style = {
              {
                fontSize: '2em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: '.05em',
                textAlign: 'center'
              }
            }
          />
        {/*tweetPosFeeds will eventually have tweets from the server*/}
        <Feed events = {this.state.tweetPosFeeds}/>
      </Grid.Column >

        <Grid.Column >
          <Header as = 'h2' content = 'Negative Tweets'
              style = {
              {
                fontSize: '2em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: '.05em',
                textAlign: 'center'
              }
            }/>
          <Feed events = {this.state.tweetNegFeeds}/>
        </Grid.Column >

    </Grid.Row>

    <Grid.Row columns = {3}   >
        {/*Adding two empty columns and the linchart in the middle
          as a way to get it dead center of the screen*/}
          <Grid.Column > </Grid.Column>

          <Grid.Column >
            <Header as = 'h1' content = 'Day by Day'
              style = {
                {
                      fontSize: '2em',
                      fontWeight: 'normal',
                      marginBottom: 0,
                      marginTop: '.5em',
                      textAlign: 'center'
                }
            }/>

        <LineChart width = {800} height = {300} data = {this.state.tweetData}
        margin = {{
                top: 5,
                right: 400,
                left: 5,
                bottom: 5
              }
            } >

            <XAxis dataKey = "name" / >
            <YAxis / >
            <CartesianGrid strokeDasharray = "3 3" / >
            <Tooltip / >
            <Legend / >
        <Line type = "monotone" dataKey = "Positive" stroke = "#8884d8"
          activeDot = {{r: 8}}/>
        <Line type = "monotone" dataKey = "Negative" stroke = "#82ca9d"/ >
      </LineChart>
    </Grid.Column >

    <Grid.Column > </Grid.Column>

  </Grid.Row>
</Grid>

</div>

    );

}


}
