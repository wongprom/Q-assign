import React from 'react';
import logo from '../images/logo-green-leaf.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand " href="#">
        <img
          src={logo}
          width="30"
          height="30"
          class="d-inline-block align-center"
          alt="leaf"
        />
        Green&Heal
      </a>
    </nav>
  );
};

export default Navbar;
