import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">Press</Link>
      </li>
      <li>
        <Link to="/about">Journal</Link>
      </li>
       
      <li>
        <a href="https://github.com/fabe/gatsby-universal">Members / Login</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
