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

    fetch(`${process.env.REACT_APP_API}/matches/${state.user._id}`, requestOptions)
      .then(res => res.json())
      // .then(matches => console.log(matches))
      .then(matches => setState(prevState => ({ ...prevState, matches })))
      .catch(err => console.log(err));
  }, []);


  const { matches } = state;

  return (
    matches.length ? (
      <div>
        <div className='m-4'>
          <h2 className='text-center p-3 text-light'>Your best tandem matches!</h2>
        </div>

        <div>
          {matches.map(match => (
            <div className='m-4'>
              <MatchedUser key={match.user._id} match={match} />
            </div>
          ))}
        </div>
      </div>
    ) : (
        <div className='d-flex justify-content-center'>
          <div
            className='bg-light border border-0 shadow m-3 '
            style={{ width: '35rem' }}
          >
            <div className="noMatch mt-4 mb-4">
              No Matches
                <i class="fas fa-question"></i>
              <i class="fas fa-exclamation"></i>
            </div>

            <div className="ml-3 mr-3 text-center mb-5">Check out your profile. <br />
            It might miss some information to match with people in your area!
            </div>
            <Link
              className='matchlink'
              to={`/editprofile`}
            >
              <i class="fas fa-user-edit editProfileIcon strong-orange mb-5"></i>
            </Link>
          </div>
        </div>
      )
  );
};

export default Matches;
