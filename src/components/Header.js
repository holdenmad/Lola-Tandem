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
    console.log(state);
    fetch(`http://localhost:5000/profiles/${state.user._id}`, requestOptions)
      .then(res => res.json())
      .then(profile =>
        setState(previousState => ({ ...previousState, profile }))
      );
  }, []);
  return (
    <div className="navbarBG">
      <Navbar className="pt-4 ">
        <Navbar.Brand href="/dashboard"><span className='display-4 pr-5 logo'>Lola</span></Navbar.Brand>
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
          <Nav.Link onClick={logOut} href="/"><i class="fas fa-power-off strong-orange"></i></Nav.Link>
        </Navbar.Collapse>
      </Navbar>

      {/* <nav className='navbar navbar-expand-sm navbar-light navbarBG'>
        <Link className='navbar-brand m-3 mr-5' to='/dashboard'>
          <span className='display-4 color'>Lola</span>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse ' id='navbarNav'>
          <ul className='navbar-nav '>
            <div className='d-flex'>
              <div className='d-flex flex-row'>
                <li className='nav-item active'>
                  <Link className='nav-link navbarText' to='/dashboard'>
                    Home <span className='sr-only'>(current)</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link navbarText' to='/matches'>
                    Matches
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link navbarText' to='/messages'>
                    Messages
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link navbarText' to='/profile'>
                    Profile
                  </Link>
                </li>
              </div>
              <div className='d-flex flex-row '>
                <li className='nav-item'>
                  <Link className='nav-link navbarText' to='/settings'>
                    Settings
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link onClick={logOut} className='nav-link navbarText' to='/'>
                    Logout
                  </Link>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </nav> */}
    </div>
  );
}

export default Header;
