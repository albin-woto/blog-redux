import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

const Menu = (props) => (
  <nav className="menu">
    <Link to="/" className="menu-link">HOME</Link>
    <Link to="/users" className="menu-link">USERS</Link>
    <Link to="/about" className="menu-link">ABOUT</Link>
  </nav>
);

export default Menu;
