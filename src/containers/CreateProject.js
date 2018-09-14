// import { grey } from '@material-ui/core/colors';

// import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { Paper, Typography } from '@material-ui/core';
// import { Auth } from 'aws-amplify';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
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
class CreateProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: '',
      relatedKeywords: '',
      Organization: '',
    };

    this.handleChange = name => (event) => {
      this.setState({
        [name]: event.target.value,
      });
      console.log(event.target.value);
    };

    this.handleSubmit = () => {
        this.createNewProject();
    };

    this.createNewProject = this.createNewProject.bind(this);
    console.log(this.props);
  }
  createNewProject() {
    const self = this;

    axios.post('http://127.0.0.1:5000/create_project', {
      name: this.props.data.username,
      projectId: this.state.projectName,
      Organization: this.state.Organization,
      Keywords: this.state.relatedKeywords,
    })
      .then(() => {
        self.props.history.push('/Dashboard');
      })
      .catch(() => {

      });
  }


  render() {
    return (

      <Paper style={styles.paper}>
        <Typography variant="display1" style={styles.title} >
            Create New Project!
        </Typography>
        <br />
        <TextField
          id="projectName"
          label="ProjectName"

          value={this.state.projectName}
          onChange={this.handleChange('projectName')}

        />
        <br />
        <TextField
          id="keywords"
          label="Keywords"

          value={this.state.relatedKeywords}
          onChange={this.handleChange('relatedKeywords')}
          margin="normal"
        />
        <br />
        <TextField
          id="Organization"
          label="Organization"

          value={this.state.Organization}
          onChange={this.handleChange('Organization')}
          margin="normal"
        />
        <br />
        <Button variant="raised" style={styles.button} color="primary" onClick={this.handleSubmit}>
        Create Project
        </Button>
      </Paper>

    );
  }
}
export default withRouter(CreateProject);
