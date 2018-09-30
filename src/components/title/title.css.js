import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.span`
  display: block;
  text-align:center;
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '400';
      default:
        return '500';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '2.2rem';
      default:
        return '2rem';
    }
  }};
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 4em auto;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '1.6rem';
        default:
          return '1.3rem';
      }
    }};
  `};
`;
