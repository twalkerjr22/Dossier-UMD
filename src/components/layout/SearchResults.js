import React from 'react';
import { List, ListItem } from '@material-ui/core';
// import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
});

/* Function that puts the tweets we retrieved in a list
 and returns them to be rendered as a list on SearchContainer.js
*/
function SearchResults(props) {
  return (
    <List className={styles.root} subheader={<li />} >
      {props.props.data.statuses.map(data => (
        <ListItem button key={data.id}>

          {data.text}

        </ListItem>


        ))}
    </List>
  );
}


export default SearchResults;
