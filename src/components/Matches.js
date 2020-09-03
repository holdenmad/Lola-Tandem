import React, { useState } from 'react';

const Matches = () => {
  const [matches, setMatches] = useState();
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    //fetch on match tab and loop over results
    fetch(`http://localhost:5000/matches/${state.user._id}`, requestOptions)
      .then(res => res.json())
      .then(matches => setMatches(matches))
      .catch(err => console.log(err));
  }, []);

  console.log(matches);

  return (
    <div>
      {matches.map(match => (
        <div>{match}</div>
      ))}
    </div>
  );
};

export default Matches;
