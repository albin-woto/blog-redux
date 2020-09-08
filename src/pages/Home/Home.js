import React from 'react';

import './Home.css';

import Trending from '../../components/Trending/Trending';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">The blog</h1>
      <Trending />
    </div>
  );
};

export default Home;
