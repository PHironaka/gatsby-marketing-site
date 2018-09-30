import styled from 'styled-components';

export const Container = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 2rem 4rem 7rem 4rem;
  grid-gap: 5em;
background: #FFF6EA;
justify-self:center;

.copyright {
justify-self:center;
img {
  margin:3em;
}
}

.contact {
  display:grid;
  grid-template-columns:1fr;

  a {
    margin: 6px 0;
  }
}

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }

  a svg  {
    color: #000;

}

`;
