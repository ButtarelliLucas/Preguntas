import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Asegúrate de vincular este archivo CSS
import logoI from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav>
     

      <div className="navbar-container">
      <NavLink to="/">
          <img src={logoI} className="logo" alt="Vite logo" />
          </NavLink>
            <NavLink to="/ml-preguntas" activeClassName="active-link">
              <button>SAIA Preguntas</button>
            </NavLink>

      </div>
    </nav>
  );
};

export default Navbar;
