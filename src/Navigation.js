import React from 'react';
import { Link } from 'react-router-dom';

const Navigation =() => {
  return (
    <nav className="navbar">
      <a id="logo">TRUE<span>CARE +</span></a>
      <Link to="/">Home</Link>
      <Link to="/doctor">Doctors</Link>
      <Link to="/patient">Patients</Link>
    </nav>
  )
}
export default Navigation;