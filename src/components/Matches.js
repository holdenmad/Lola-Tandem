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

    //fetch on match tab and loop over results

    //possible problems:
    // 1. State isn't being set correctly
    // 2. User isn't staying logged in, so matches can't be made without a userId
    // 3. Profiles are not in state on matches page

    fetch(`http://localhost:5000/matches/${state.user._id}`, requestOptions)
      .then(res => res.json())
      //   .then(matches => console.log(matches[0].user.name))
      .then(matches => setState(prevState => ({ ...prevState, matches })))
      .catch(err => console.log(err));
  }, []);

  console.log(state.matches);
  const { matches } = state;

  return (
    <div>
      <div>Here are matches</div>
      <div>
        {matches.map(match => (
          <MatchedUser key={match.user.id} match={match} />
        ))}

        {/* {Object.entries(state.matches).map(matchInfo =>
      <div>
      <li>{matchInfo[0]}: {matchInfo[1]}</li>
      </div>)} */}
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
