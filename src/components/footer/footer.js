import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './footer.css';
import Logo from './img/logo-dw.svg';
import Nav from 'components/footer/nav';
import Contact from 'components/footer/contact';
import Center from 'components/footer/center';


const Header = ({ title }) => (
    <Container>
      <Nav />
      <Center />
      <Contact />
    </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
