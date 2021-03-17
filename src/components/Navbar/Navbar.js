import React from 'react';
import './style.css';
import logo from '../../images/logo.svg';

export default function Navbar() {
  return (
    <div className="Navbar">
      <img src={logo} alt="Pokemon Logo" style={{ height: '75px' }}></img>
    </div>
  );
}
