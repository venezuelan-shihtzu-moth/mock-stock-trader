import React from 'react';
import '../syles.css';
import { Link } from 'react-router-dom';

function Nav() {
  const style = {
    color: 'white',
  };

  return (
    <nav>
      <ul className="nav-links">
        <Link styles={style} to="/about">
          <li>About</li>
        </Link>
        <Link styles={style} to="/leaderboard">
          <li>Leaderboard</li>
        </Link>
        <Link styles={style} to="/plchart">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
