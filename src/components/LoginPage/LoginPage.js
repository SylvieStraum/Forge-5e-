import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input, Container } from 'semantic-ui-react'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <Container textAlign='center'>
        <div className="log-in">
          {this.props.errors.loginMessage && (
            <h2
              className="alert"
              role="alert"
            >
              {this.props.errors.loginMessage}
            </h2>
          )}
          <br />
          <form onSubmit={this.login}>
            <h1>Login</h1>
            <div>
              <Input
                type="text"
                label="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </div>
            <br />
            <div>
              <Input
                type="password"
                label="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />

            </div>
            <br />
            <div>
              <Button
                className="log-in"
                type="submit"
                name="submit"
                value="Log In"
              >Login
              </Button>
              <Button
                basic color='black'
                type="button"
                className="link-button"
                onClick={() => { this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }}
              >
                Register
          </Button>
            </div>
          </form>
        </div>
      </Container>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
