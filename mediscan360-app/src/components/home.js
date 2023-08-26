

import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="background-image">
        <div className="image-overlay">
          <h1>Lets double check
 your medicine
 before you
 buy...</h1>
          <button className="cta-button"><a href='/check'>Check</a></button>
        </div>
      </div>
    </div>
  );
};

export default Home;
