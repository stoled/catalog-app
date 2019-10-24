import React from 'react';
import { Link } from 'react-router-dom';

export default function NavigationBar () {
  return (
  <nav>
    <ul className="container">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
  )
}