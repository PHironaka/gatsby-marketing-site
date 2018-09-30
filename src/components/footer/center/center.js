import React from 'react';
import { Link } from 'gatsby';
import { Container } from './center.css';
import Logo from 'components/footer/img/logo-dw.svg';

const Copyright = () => (
  <div class="copyright">
      <img src={Logo} alt="logo"/>
      <h2>© 2018 Danford Works</h2>
  </div>
);

export default Copyright;