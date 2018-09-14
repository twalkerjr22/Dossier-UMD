import React from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import TweetSearchResults from '../components/layout/TweetSearchResults';
import PieChart from '../components/layout/Charts/PieChart';
import LineChart from '../components/layout/Charts/LineChart';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '20%',
  },
};

class SearchResultsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { results: [], isLoading: true };


    this.searchTweets = this.searchTweets.bind(this);
    this.searchTweets();
  }

  // TODO: Handle case where we don't get results or an error from twitter
  async searchTweets() {

    const res = await axios.get(`http://127.0.0.1:5000/searchKeyword?searchTerm=${this.props.data.searchTerm}`);

    this.setState({ results: res });
    this.setState({ isLoading: false });
  }


  render() {
    return (

      <div className={styles.root}>
        <Grid
          container
          spacing={24}
        //  alignItems="center"
          direction="row"
        //  justify="center"
        >
          <Grid item xs={6}>
            <PieChart />
            <LineChart />
          </Grid>
          <Grid item xs={6}>
            {!this.state.isLoading &&
            <TweetSearchResults props={this.state.results} />

      }
          </Grid>

        </Grid>
      </div>
    );
  }
}

export default SearchResultsContainer;
