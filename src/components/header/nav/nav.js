import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/press">Press</Link>
      </li>
      <li>
        <Link to="/journal">Journal</Link>
      </li>
       
      <li>
        <a href="/">Members / Login</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
