import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from './Context/AppContext';

const Matches = () => {
  const { state, setState } = useContext(AppContext);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    //fetch on match tab and loop over results
    fetch(`http://localhost:5000/matches/${state.user._id}`, requestOptions)
      .then(async res => {
        const matches = await res.json();
      })
      .then(matches =>
        setState(...previousState => ({ ...previousState, matches }))
      )
      .catch(err => console.log(err));
  }, []);

  console.log(state);

  return (
    <div>
      {state.matches.map(match => (
        <div>{match}</div>
      ))}
    </div>
  );
};

export default Matches;
