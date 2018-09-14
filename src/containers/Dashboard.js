// import { grey } from '@material-ui/core/colors';

// import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import { Auth } from 'aws-amplify';
import { withRouter } from 'react-router-dom';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
// import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import axios from 'axios';
// import TextField from '@material-ui/core/TextField';

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
    paddingBottom:10
  },
  paperTwo: {
    marginTop:10,
    height: '280%',
    width: '50%',
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
  titleTwo: {
    color: 'black',
    marginTop: 10,
  },
  margin: {
    height: '100%',
    margin: 10,
    padding: 100,
  },
};
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userProjects: {}

    };

    this.handleChange = name => (event) => {
      this.setState({
        [name]: event.target.value,
      });
      console.log(event.target.value);
    };

    console.log(this.props);

    this.getUserName = () => {
      Auth.currentAuthenticatedUser().then(user =>{

        var userInfo = {username:user.attributes['custom:firstname']};

        this.props.data.username = user.username;
        this.setState({name:user.attributes['custom:firstname']});

        console.log(user);
      });
  };

    const self = this;
    this.handleCreateProject = () => {
      self.props.history.push('/CreateProject');
    };

    this.getUserName = this.getUserName.bind(this);
    this.handleCreateProject = this.handleCreateProject.bind(this);

    this.getUserName();
  }

  async componentDidMount() {
    const self = this;
    // function to create a new project. It makes an API call to the server
    // the server then makes a call to our dynamodb table in amazon to add the new project

    axios.post('http://127.0.0.1:5000/get_projects', {
      name: this.props.data.username,
    })
      .then((response) => {
        self.setState({ userProjects: response.data.Items });
        self.setState({ isLoading: false });
        self.liquids = self.state.userProjects.forEach(element => <Button variant="raised" style={styles.button} color="primary">element</Button>);
        self.setState({projectsLoaded: true});
        response.data.Items.forEach((element) => {
          console.log(element);

        });
      })
      .catch((error) => {
        console.log(error);
      });
  }



  render() {
    const self = this;
    return (

      <Paper style={styles.paper}>
        <Typography variant="display1" style={styles.title} >
            Welcome {this.state.name}!
        </Typography>
        <br />
        <Button variant="raised" style={styles.button} color="primary" onClick={this.handleCreateProject}>
        Create Project
        </Button>
        <Typography variant="display1" style={styles.title} >
            Active Projects!
        </Typography>


        {this.state.projectsLoaded?
          self.state.userProjects.map(function(object, i){
                    return (
                      <Grid container key={i} justify = "center">
                        <Paper key={i} style={styles.paperTwo}>
                          <Typography variant="headline" style={styles.title} >
                            {object.ProjectID}
                          </Typography>
                          <br />
                        </Paper>
                      </Grid>)
                  })
          :'Loading'
        }


      </Paper>


    );
  }
}
export default withRouter(Dashboard);
