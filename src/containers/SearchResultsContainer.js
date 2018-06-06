import React from 'react';
import axios from 'axios';
import SearchResults from '../components/layout/SearchResults';


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

      <div>
        {!this.state.isLoading &&
        <SearchResults props={this.state.results} />
      }
      </div>
    );
  }
}

export default SearchResultsContainer;
