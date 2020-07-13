import React from 'react'
import { Link } from 'react-router-dom';

const Menu = (props) => (
  <nav>
    <Link to="/users">Users</Link>
    <Link to="/tasks">Tasks</Link>
  </nav>
);

export default Menu;
