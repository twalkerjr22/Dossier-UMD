// import { grey } from '@material-ui/core/colors';
import { withRouter } from 'react-router-dom';
// import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { Auth } from 'aws-amplify';

// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
// import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
    height: '280%',
    textAlign: 'center',
    backgroundColor: 'white',

  },
  button: {
    margin: 15,
    padding: 10,
  },
  title: {
    color: 'black',
    marginTop: 10,
  },
  margin: {
    height: '100%',
    margin: 10,
    padding: 100,
  },
};
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleChange = name => (event) => {
      this.setState({
        [name]: event.target.value,
      });
      console.log(event.target.value);
    };
    const self = this;
    this.handleLogin = async () => {
      try {
        await Auth.signIn(this.state.username, this.state.password);
        self.props.history.push('/Dashboard');
      } catch (e) {
        alert(e.message);
      }
    };
    

    this.handleLogin = this.handleLogin.bind(this);
  }


  render() {
    return (

      <Paper style={styles.paper}>
        <Typography variant="display1" style={styles.title} >
            Login
        </Typography>
        <br />
        <TextField
          id="name"
          label="Username"

          value={this.state.username}
          onChange={this.handleChange('username')}

        />
        <br />
        <TextField
          id="password"
          label="Password"

          value={this.state.password}
          onChange={this.handleChange('password')}
          margin="normal"
        />
        <br />
        <Button variant="raised" style={styles.button} color="primary" onClick={this.handleLogin}>
        Login
        </Button>
      </Paper>

    );
  }
}
export default withRouter(Login);
