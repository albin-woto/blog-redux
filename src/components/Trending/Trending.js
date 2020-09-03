import React from 'react';

import Card from '../Card/Card';
import './Trending.css';

const Trending = () => {
  return (
    <section className="trending-container">
      <h4 className="trending-title">Trending</h4>
      <Card />
      <Card />
      <Card />
    </section>
  );
};

export default Trending;
