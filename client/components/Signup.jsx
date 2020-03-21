import React, { Component } from 'react';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
  }

  handleSubmit(e) {
    const { username, password } = this.state;

    e.preventDefault();

    if (!username) {
      return this.setState({ error: 'Required: Username' });
    }
    if (!password) {
      return this.setState({ error: 'Required: Password' });
    }

    return this.setState({ error: 'Required: Username and Password' });
  }

  handleUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="userid"
            value={username}
            onChange={this.handleUsername}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={this.handlePassword}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Signup;
