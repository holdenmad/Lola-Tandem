import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import MatchedUser from './MatchedUser';

import { AppContext } from './Context/AppContext';

const Matches = () => {
  const { state, setState } = useContext(AppContext);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };

    fetch(`${process.env.REACT_APP_HEROKU}/matches/${state.user._id}`, requestOptions)
      .then(res => res.json())
        // .then(matches => console.log(matches))
      .then(matches => setState(prevState => ({ ...prevState, matches })))
      .catch(err => console.log(err));
  }, []);


  const { matches } = state;
  
  return (
    //how to change text if there are no matches?
    // matches === null ? (
    <div className='m-4'>
      <h2 className='text-center p-3 text-light'>Your best tandem matches!</h2>
      <div>
        {matches.map(match => (
          <div className='m-4'>
            <MatchedUser key={match.user._id} match={match} />
          </div>
        ))}
      </div>
    </div>
    // ) : (
    //   <div className='justify-content-center d-flex'>
    //     <p className='display-4 '>You have no matches!</p>
    //   </div>
  );
};

export default Matches;
