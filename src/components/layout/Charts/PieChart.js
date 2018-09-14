import React from 'react';
// import { withStyles } from '@material-ui/core/styles';

import { Typography, Paper } from '@material-ui/core';
import { Pie } from 'react-chartjs-2';


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

class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        datasets: [{
          data: [
            40,
            60,
          ],
          backgroundColor: [
            '#C8102E',
            '#FFCD00',
          ],
          label: 'Dataset 1',
        }],
        labels: [
          'Negative',
          'Positive',
        ],
      },
      options: {
        responsive: true,
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
          Tweet Breakdown
        </Typography>
        <Pie
          data={this.state.data}
          options={this.state.options}
        />

      </Paper>
    );
  }
}
export default PieChart;
