/**
 * @title App.jsx
 * @description Main component for our application
 */

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Leaderboard from './components/Leaderboard';
import PLchart from './components/PLchart';
import Signup from './components/Signup';
import About from './components/About';
import Nav from './Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="leaderboard" component={Leaderboard} />
          <Route path="plchart" component={PLchart} />
          <Route path="/" exact component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
