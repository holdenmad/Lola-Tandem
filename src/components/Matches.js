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

    fetch(`http://localhost:5000/matches/${state.user._id}`, requestOptions)
      .then(res => res.json())
      //   .then(matches => console.log(matches[0].user.name))
      .then(matches => setState(prevState => ({ ...prevState, matches })))
      .catch(err => console.log(err));
  }, []);

  console.log(state.matches);
  const { matches } = state;

  return (
    <div className='m-4'>
      <h2 class='text-center'>Your best matches!</h2>
      <div >
        {matches.map(match => (
          <div className="m-4"><MatchedUser key={match.user.id} match={match} /></div>
        ))}
      </div>
    </div>
  );
  //   !state.isLoggedIn ? (
  //       <>
  //
  //     </>
  //    ) : (
  //      <Redirect to='/login' />

  //   );
};

export default Matches;
