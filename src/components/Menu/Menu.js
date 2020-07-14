import React from 'react'
import { Link } from 'react-router-dom';

import './Menu.css';

const Menu = (props) => (
  <nav className="menu">
    <Link to="/users" className="menu-link">Users</Link>
    <Link to="/tasks" className="menu-link">Tasks</Link>
  </nav>
);

export default Menu;
