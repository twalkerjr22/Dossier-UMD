import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';

const styles = {
  root: {
    flex: 1,
  },
  appbarStyle: {
    backgroundColor: 'black',
  },
};


export default props => (

  <div >
    <AppBar style={styles.appbarStyle} position="static">
      <Toolbar>
        {/* accessing the history router object from the parent App.js
        change the page */}
        <Button onClick={() => props.parentProps.history.push('/')} color="inherit" variant="outlined">
        Home
        </Button>
        <div style={styles.root} />
        <Button color="inherit" variant="outlined">
          Signup
        </Button>
        <Button color="inherit" variant="outlined" onClick={() => props.parentProps.history.push('/Login')} >
        Login
        </Button>
      </Toolbar>
    </AppBar>
  </div>
);
