import React from 'react';

import './Footer.css';

const Footer = () => (
  <footer>
    <p>
      Made with{' '}
      <span role="img" aria-label="heart">
        ♥️
      </span>{' '}
      by{' '}
      <a
        className="link-footer"
        href="https://www.linkedin.com/in/albin-wotoszyn"
        rel="noopener noreferrer"
        target="_blank">
        Albin Wotoszyn
      </a>
    </p>
  </footer>
);

export default Footer;
