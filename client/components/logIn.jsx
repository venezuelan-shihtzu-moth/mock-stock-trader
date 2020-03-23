import React, { Component } from 'react';
import { render } from 'react-dom';

class LogIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username :"",
            password : ""
        }

        this.clicked = this.clicked.bind(this);
    }

    clicked(event) {
        fetch("/backend/logIn", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              username: this.refs.username.value,
              password: this.refs.password.value
            })
          }).then((response) => {
            return response.json();
          })
    }

    render() {
        return (
            <div>
                <h5>Log In</h5>
                    <input ref="username" type="text" placeholder="username"/>
                    <input ref="password" type="password" placeholder="password"/>
                    <button onClick={ this.clicked }>Log In</button>
            </div>
        )
    }
}

export default LogIn