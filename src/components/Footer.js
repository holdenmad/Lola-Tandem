import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <p>©Copyright</p>
      <a href='https://github.com/juliamj/Lola-client'>
        <i class='fab fa-github'></i>
      </a>
      <Link to='/about'>About Us</Link>
    </div>
  );
}

export default Footer;
