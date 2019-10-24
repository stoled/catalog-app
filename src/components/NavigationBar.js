import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
// import { FaBeer } from 'react-icons/fa';

export default function NavigationBar () {
  return (
  <nav>
    <Link to="/">
      <img src={logo} alt="logo"/>
    </Link>
    <ul className="container">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/catalog">Catalog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
  )
}