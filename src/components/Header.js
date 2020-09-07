import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './Context/AppContext';

function Header() {
  const { logOut } = useContext(AppContext);
  return (
    <div>
      <nav className='navbar navbar-expand-sm navbar-light bg-primary'>
        <Link className='navbar-brand' to='/dashboard'>
          <span className='display-4 color'>lola</span>
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
      </nav>
    </div>
  );
}

export default Header;
