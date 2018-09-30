import React from 'react';
import { Email } from './newsletter.css';


const Nav = () => (
  <Email >
    <input placeholder="Email Address"></input>
    <button type="submit" class="search-button" role="button">
        <span class="icon-fallback-text">Submit</span>
      </button>
		
    </Email>
);

export default Nav;


