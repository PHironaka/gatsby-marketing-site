import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.span`
  display: block;
  font-size: 1.5rem;
  text-transform:uppercase;
  margin: 2rem 2rem 1rem;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    font-weight: bold;
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 2rem 2rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
