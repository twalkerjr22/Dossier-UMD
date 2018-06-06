import React from 'react';
import { Paper, FormControl, Typography, Grid, InputLabel, InputAdornment, Input } from '@material-ui/core';
// import { grey } from '@material-ui/core/colors';
import SearchIcon from '@material-ui/icons/Search';

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

export default () => (
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
