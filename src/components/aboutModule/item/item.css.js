import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem;


`;

export const Section = styled.div`
  display: grid;
  grid-gap:  2em;
grid-template-columns: repeat(2,1fr);

  .aboutImage {
&:nth-child(1) {
order:-1 !important;
  }
  }

`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 2rem 2rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
