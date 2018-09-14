import React from 'react';
import { List, ListItem, Paper, Typography, Divider } from '@material-ui/core';
// import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    width: '100%',
    maxWidth: 50,
    height: 5,
  },
  paper: {
    marginTop: 20,
    width: '90%',
    // height: '100%',
    fontSize: '14px',
    textAlign: 'center',
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


class TweetSearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }


  /* Function that puts the tweets we retrieved in a list
 and returns them to be rendered as a list on SearchContainer.js
*/
  render() {
    /* Function that puts the tweets we retrieved in a list
 and returns them to be rendered as a list on SearchContainer.js
*/


    return (

      <Paper style={styles.paper} >
        <Typography variant="display3" style={styles.title}>
        Recent Tweets
        </Typography>
        <Divider />
        <List component="ul" >
          {this.props.props.data.statuses.map(data => (
            <React.Fragment>
              <ListItem button key={data.id}>
                <strong>{data.user.name}</strong>: { data.text}

              </ListItem>

              <Divider />
            </React.Fragment>
        ))}
        </List>
      </Paper>

    );
  }
}

export default TweetSearchResults;
