import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <Navbar className='footer d-flex justify-content-between'>
      <span className="text-black-50">©Copyright J+H</span>
      <a href='https://github.com/juliamj/Lola-client'>
        <i class='fab fa-github text-black-50'></i>
      </a>
      <Link className="text-black-50" to='/about'>About Us</Link>
    </Navbar>
  );
}

export default Footer;
