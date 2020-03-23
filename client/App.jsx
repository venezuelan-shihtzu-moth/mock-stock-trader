/**
 * @title App.jsx
 * @description Main component for our application
 */

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LogIn from './components/logIn.jsx'
// import { logIn } from '../server/controllers/loginController.js';
 
//  Components needed: 
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Router>
            <nav className='navigation'>
              <header>Super Awesome Trading App!</header>
              <ul>
              <li><Link to='/signup'>Sign Up</Link></li>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/profitloss'>Profit & Loss</Link></li>
              </ul>
              <Switch>
                <Route path='/signup'>
                  // Render signup component here
                </Route>
                <Route path="/logIn">
                  // Render login component here
                  <LogIn></LogIn>
                </Route>
                <Route path='/profitloss'>
                  // Render pl component here
                </Route>
                
              </Switch>
            </nav>
        </Router>
    )
  }
}

export default App;
