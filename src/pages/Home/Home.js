import React from 'react';

import './Home.css';
import Background from '../../images/home-background.jpg';

const Home = () => {
  return (
    <main className="home-container">
      <img
        className="home-background"
        src={Background}
        alt="Coffe, tablet, pencil and books on a desk"
      />
      <h1 className="title">
        Welcome to <strong>The blog</strong>
      </h1>
    </main>
  );
};

export default Home;
