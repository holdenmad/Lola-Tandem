import React, { useEffect, useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppContext } from './Context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  const { logOut, state, setState } = useContext(AppContext);

  useEffect(() => {
    if (!state.user) return;

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    
    fetch(`${process.env.REACT_APP_HEROKU}/profiles/${state.user._id}`, requestOptions)
      .then(res => res.json())
      .then(profile =>
        setState(previousState => ({ ...previousState, profile }))
      );
  }, []);
  return (
    <div className="navbarBG">
      <Navbar className="pt-4 ">
        <Navbar.Brand href="/dashboard"><span className='display-3 ml-3 pr-5 logo'>Lola</span></Navbar.Brand>
        <Navbar.Toggle />
        <Nav className="mr-auto text-light">
          <Nav.Link className="text-light header-nav-text"  href="/dashboard">Home</Nav.Link>
          <Nav.Link className="text-light header-nav-text"  href="/matches">Matches</Nav.Link>
          <Nav.Link className="text-light header-nav-text" href="/messages">Messages</Nav.Link>
          <Nav.Link className="text-light header-nav-text" href="/profile">Profile</Nav.Link>
          <Nav.Link className="text-light header-nav-text" href="/settings">Settings</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Nav.Link className="text-light" href="/profile">  {`${state.user ? state.user.name : null}`}</Nav.Link>
          </Navbar.Text>
          <Nav.Link onClick={logOut} href="/"><i className="fas fa-power-off strong-orange logout"></i></Nav.Link>
        </Navbar.Collapse>
      </Navbar>

    </div>
  );
}

export default Header;
