import styled from 'styled-components';

export const Container = styled.div`

	justify-self: right;
text-align: right;

	ul {
    display: grid;

  grid-template-columns: repeat(3, 23px);
grid-gap:10px;
justify-content:right;
	margin:0 0 1em;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;
      margin: 7px 10px 0 0 ;
      

}    
  }
`;
