import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy, Section } from './item.css';

const Item = ({ title, copy, image }) => (

    
    <Section>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />

      <Title>{title} </Title>
      <Copy>{copy}</Copy>
    </Section>

);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
