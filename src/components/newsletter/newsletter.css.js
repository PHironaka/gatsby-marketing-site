import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Email = styled.form`

  input {
    margin:3em 0;
    padding: 1em 2em;
    &::placeholder {
  color: black;
}
  }

  button {
    margin:3em 0;
    padding: 1.199em 2em;
  }

  input {
    min-width:250px;
  }

  button {
    background:black;
    color:white;
    border:none;
    outline:none;
  }
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
  margin: 0 auto 3em auto;

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
  margin: 0 auto 3em auto;

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
