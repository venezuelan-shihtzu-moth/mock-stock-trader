/**
 * @title App.jsx
 * @description Main component for our application
 */

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Buy from './buy.js';

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
                <li><Link to='/buy'>Buy Stocks</Link></li>
                <li><Link to='/profitloss'>Profit & Loss</Link></li>
              </ul>
            </nav>
            <div>
            <Switch>
                <Route path='/signup'>
                  // Render signup component here
                </Route>
                <Route path='/login'>
                  // Render login component here
                </Route>
                <Route path='/buy'>
                  // Render buy component here
                </Route>
                <Route path='/profitloss'>
                  // Render pl component here
                </Route>
                
              </Switch>
            </div>
        </Router>
    )
  }
}

export default App;
