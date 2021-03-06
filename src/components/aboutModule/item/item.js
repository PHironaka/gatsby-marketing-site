import React from 'react';
import PropTypes from 'prop-types';
import { Title, Copy, Section } from './item.css';
import Img from 'gatsby-image';

const Item = ({ title, copy, image }) => (

    
    <Section>
      <Img fluid={image ? image.childImageSharp.fluid : {}}  className="aboutImage" alt={title} />
      <div class="about-copy">
      <Title>{title} </Title>
      <Copy>{copy}</Copy>
      </div>
    </Section>

);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;

