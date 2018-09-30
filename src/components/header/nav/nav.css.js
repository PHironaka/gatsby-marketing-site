import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
       text-transform: uppercase;
          font-size: 1.3rem;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    font-weight: bold;
       a {
        color: black;
-webkit-letter-spacing: 2px;
-moz-letter-spacing: 2px;
-ms-letter-spacing: 2px;
letter-spacing: 2px;
font-size: .9em;
       }

      & + li {
        margin-left: 2rem;
      }
    }
  }
`;
