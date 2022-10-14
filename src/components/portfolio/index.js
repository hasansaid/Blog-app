import React from 'react';
import './styles.css';
import Portfolio_body from '../portfolio/Body';
import Portfolio_navigation from '../portfolio/Navigation';

const Portfolio = () => {
  return (
    <div>
      <Portfolio_navigation />
      <Portfolio_body />
    </div>
  );
};

export default Portfolio;
