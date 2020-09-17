import React from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.css';

const Menu = (props) => (
  <nav className="menu">
    <NavLink exact to="/" className="menu-link" activeClassName="is-active">
      HOME
    </NavLink>
    <NavLink to="/users" className="menu-link" activeClassName="is-active">
      USERS
    </NavLink>
    <NavLink to="/about" className="menu-link" activeClassName="is-active">
      ABOUT
    </NavLink>
  </nav>
);

export default Menu;
