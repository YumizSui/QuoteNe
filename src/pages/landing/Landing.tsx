import React from 'react';
import { Link } from 'react-router-dom';

const Landing = (): JSX.Element => (
  <div>
    <h1>置き場所</h1>
    <ul>
      <li>
        <Link to="/app">App (Main)</Link>
      </li>
    </ul>
  </div>
);

export default Landing;
