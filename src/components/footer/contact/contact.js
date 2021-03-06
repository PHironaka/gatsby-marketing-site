import React from 'react';
import { Link } from 'gatsby';
import { Container } from './contact.css';

const Nav = () => (
  <Container>
  <ul>


 <li><a href="mailto:hello@danfordworks.com"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg></a></li>
  

    <li><a href="mailto:hello@danfordworks.com"><svg fill="black" height="20" stroke-linecap="round" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 2h-3a5 5 0 0 0 -5 5v3h-3v4h3v8h4v-8h3l1-4h-4v-3a1 1 0 0 1 1-1h3z"/></svg></a></li>
  
 
  <li>
  
  <a href="mailto:hello@danfordworks.com"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="black"  stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a></li>
  </ul>
  
<div class="contact">
     <Link to="mailto:hello@danfordworks.com">hello@danfordworks.com</Link>
     <Link to="mailto:hello@danfordworks.com">212.678.1228</Link>
     </div>
  </Container>
);

export default Nav;
