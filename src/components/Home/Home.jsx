import React from 'react';
import logoI from '../../assets/logo.png';

const Home = () => {
  return (
    <div>
        <div>
            <img src={logoI} className="logo-container"alt="logo" />
        </div>
        <h2>
             Sociedad Argentina de Inteligencia Artificial.
        </h2>
    </div>
  );
};

export default Home;
