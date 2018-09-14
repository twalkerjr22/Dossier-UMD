import React from 'react';
// import { withStyles } from '@material-ui/core/styles';

import { Typography, Paper } from '@material-ui/core';
import { Line } from 'react-chartjs-2';


const styles = {
  root: {
    width: '100%',
    maxWidth: 50,
    height: 5,
  },
  paper: {
    // marginLeft: 'auto',
    // marginRight: 'auto',
    marginTop: 20,
    marginLeft: 20,
    fontSize: '14px',
    textAlign: 'center',
    width: '90%',
    // height: 'a',
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },

  title: {
    paddingBottom: 20,
    paddingTop: 20,
    textAlign: 'center',
  },

};

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ['5/01/18', '5/02/18', '5/03/18', '5/04/18', '5/05/18', '5/05/18', '5/06/18'],
        datasets: [
          {
            label: 'Mentions',
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#FFCD00',
            borderColor: '#FFCD00',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#FFCD00',
            pointBackgroundColor: '#FFCD00',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#C8102E',
            pointHoverBorderColor: '#FFCD00',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
          },
        ],
      },
    };
  }

  /* Function that puts the tweets we retrieved in a list
 and returns them to be rendered as a list on SearchContainer.js
*/
  render() {
    return (
      <Paper style={styles.paper}>
        <Typography variant="display3" style={styles.title}>
          Number of Mentions
        </Typography>
        <Line data={this.state.data} />

      </Paper>
    );
  }
}
export default LineChart;
