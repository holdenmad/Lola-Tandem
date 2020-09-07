import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AppContext } from './Context/AppContext';
import { Link } from 'react-router-dom';

function Dashboard() {
  const { state, setState } = useContext(AppContext);

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
  return state.user ? (
    <div className='p-4'>
      <div>
        <h1 className='text-center mb-5 text-light'>
          Welcome {`${state.user ? state.user.name : null}`}
        </h1>
        <Link className='nav-link navbarText' to='/matches'>
          <button className='btn btn-warning btn-lg btn-block'>
            Find a tandem partner
          </button>
        </Link>
        <br/>
        <div className='row'>
          <div className='col-lg'>
            <p className='p-5 ml-5 text bg-light'>
              Thanks for using our site to help you on your language learning
              journey! If you're here, you want to chat with real people who
              live in your city, but are tired of boring conversations in your
              target language. <br /> <br />
              With <i>Lola</i>, you'll be able to find language tandem partners
              based on your common interests, so you can have your language
              tandem while doing something you both love.
              <br />
              <br />
              Let's get started!
              <br />
              <text className='signature'>J+H</text>
            </p>
          </div>
          <div className='col-lg'>
            <img
              className='text-center'
              src='../images/Canoeing.png'
              alt='hello'
              width='500px'
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to='/users/login' />
  );
}

export default Dashboard;
