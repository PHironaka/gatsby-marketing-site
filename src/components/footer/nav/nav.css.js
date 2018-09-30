import styled from 'styled-components';

export const Container = styled.nav`
  h2 {
  font-size: 1.6rem;
font-family: "Lucida Sans Unicode","Lucida Grande",sans-serif;
font-weight: bold;
text-transform:uppercase;
}
  ul {
    display: grid;
  grid-template-columns: repeat(2, 1fr);

    list-style: none;
    padding: 0;

    li {
      font-size: 1.3rem;
      margin: 7px 10px 0 0 ;
      
    }
  }
`;
