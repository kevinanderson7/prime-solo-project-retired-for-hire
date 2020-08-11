import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//MaterialUI
import { Button, TextField, Typography, Grid } from '@material-ui/core';

class RegisterForm extends Component {
  state = {
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        username: this.state.username,
        password: this.state.password,
      },
    });
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <form className="formPanel" onSubmit={this.registerUser}>
        <Grid
          container
          alignItems="flex-start"
          justify="flex-start"
          direction="column"
          spacing={1}
        >
          <Typography gutterBottom variant="h4" component="h2">
            Register User
          </Typography>
          {this.props.errors.registrationMessage && (
            <h3 className="alert" role="alert">
              {this.props.errors.registrationMessage}
            </h3>
          )}
          <Grid item>
            <TextField
              variant="outlined"
              id="outlined-basic"
              type="text"
              label="Username"
              name="username"
              value={this.state.username}
              required
              onChange={this.handleInputChangeFor('username')}
            />
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              label="Password"
              type="password"
              name="password"
              value={this.state.password}
              required
              onChange={this.handleInputChangeFor('password')}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className="register"
              type="submit"
              name="submit"
              value="Register"
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(RegisterForm);
