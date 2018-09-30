import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <h2> Directory </h2>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">Stuff</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/about">Press</Link>
      </li>
      <li>
        <Link to="/about">Philosophy</Link>
      </li>
      <li>
        <Link to="/about">Platform</Link>
      </li>
      <li>
        <Link to="/about">Facility</Link>
      </li>
      <li>
        <Link to="/about">Blog</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
