import React from 'react';

import './Home.css';
import Image from '../../images/image.png';

import Trending from '../../components/Trending/Trending';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">The blog</h1>
      <section className="home-content">
        <Trending />
        <img
          className="home-image"
          src={Image}
          alt="Drawing of a girl reading"
        />
      </section>
    </div>
  );
};

export default Home;
