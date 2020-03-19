/**
 * @title App.jsx
 * @description Main component for our application
 */

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


//  Components needed: 
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Router>
            <div className='navigation'>
            <header>Super Awesome Trading App!</header>
            </div>
        </Router>
    )
  }
}

export default App;
