import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding: 0 4rem;
  margin: 4em 0;


  ${MEDIA.TABLET`
    display: block;
  `};
`;
