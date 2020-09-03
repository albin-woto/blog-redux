import React from 'react';

import './Home.css';
import Background from '../../images/home-background.jpg';

import Trending from '../../components/Trending/Trending';

const Home = () => {
  return (
    <div className="home-container">
      <img
        className="home-background"
        src={Background}
        alt="Coffe, tablet, pencil and books on a desk"
      />
      <h1 className="title">The blog</h1>
      <Trending />
    </div>
  );
};

export default Home;
