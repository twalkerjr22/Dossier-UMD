
import { Paper, FormControl, Typography, Grid, InputLabel, InputAdornment, Input } from '@material-ui/core';
// import { grey } from '@material-ui/core/colors';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import '../App.css';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100%',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {

    paddingTop: '20%',
    height: '280%',
    textAlign: 'center',
    backgroundColor: 'black',

  },
  title: {
    color: 'white',
  },
  margin: {
    height: '100%',
    margin: 10,
    padding: 100,
  },
};

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    /* eslint-disable no-unused-vars */
    this.state = { searchTerm: '' };
    const self = this;


    this.searchTweets = () => {
      self.props.data.searchTerm = this.state.searchTerm;
      self.props.history.push('/search');
    };


    this.handleChange = (e) => {
      self.setState({ searchTerm: e.target.value });
    };


    this.keyPress = (e) => {
      if (e.keyCode === 13) {
        self.setState({ searchTerm: e.target.value });

        self.searchTweets();

        // put the login here
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
    this.searchTweets = this.searchTweets.bind(this);
    this.Searchbar = this.Searchbar.bind(this);
  }

  Searchbar() {
    const self = this;

    return (
      <div className={styles.root}>
        <Grid container spacing={24} >
          <Grid item xs={12}>
            <Paper style={styles.paper}>
              <Typography variant="display3" style={styles.title} >
          Dossier
              </Typography>
              <FormControl style={{ width: '70%' }} >
                <InputLabel style={{ marginLeft: 20 }} htmlFor="input-with-icon-adornment">Begin Your Search</InputLabel>
                <Input
                  placeholder="Search a Keyword"
                  onChange={this.handleChange}
                  onKeyDown={this.keyPress}
                  inputMarginDense
                  style={{
                  borderRadius: '5px',
                  margin: 20,
                  padding: '1%',
                  backgroundColor: 'white',
                  textAlign: 'center',
                }}
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
          }
                />
              </FormControl>
            </Paper>
          </Grid>
        </Grid>
      </div>

    );
  }


  render() {
    return (
      <React.Fragment>
        <this.Searchbar />
      </React.Fragment>
    );
  }
}

export default Homepage;
