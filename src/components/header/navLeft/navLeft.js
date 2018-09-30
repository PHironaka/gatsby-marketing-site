import React from 'react';
import { Link } from 'gatsby';
import { Container } from './navLeft.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/">contact</Link>
      </li>
       
      <li>
        <a href="/">locations</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
