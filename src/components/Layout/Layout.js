import React from 'react';

import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import './Layout.css';

const Layout = (props) => (
  <div className="layout-container">
    <Menu />
      {props.children}
    <Footer />
  </div>
);

export default Layout;
