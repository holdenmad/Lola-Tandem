import React, { useState, useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import Checkbox from './utils/Checkbox';

function Interests() {
  const { state, setState, handleProfileFormChange, interests } = useContext(
    AppContext
  );

//Make sure that the checked boxes are being saved to the unsavedProfile State
//Get result of handleUnsavedFormState


  const handleChange = e => {
    // let interests = state.interests;
    interests.forEach(interest => {
      if (interest.value === e.target.value) {
        interest.isChecked = e.target.checked;
      }
    });
    setState({ interests: interests });
    console.log(state)
  };

  const handleCheckChildElement = event => {
    let interests = state.interests;
    interests.forEach(interest => {
      if (interest.value === event.target.value) {
        interest.isChecked = event.target.checked;
      }
    });
    setState({ interests: interests });
  };

  return (
    <div>
      <label className='heading' id='checkbox-group'>
        Interests
      </label>
      {interests.map(interest => (
        <Checkbox
          key={interest.id}
          {...interest}
          isChecked={interest.isChecked}
          //   handleCheckChildElement={handleCheckChildElement}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
}

export default Interests;
