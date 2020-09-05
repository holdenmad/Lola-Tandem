import React, { useState, useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import Checkbox from './utils/Checkbox'

const sports = [
  'Sports',
  'Teamsports',
  'Extreme Sports',
  'Skating',
  'Running',
  'Fitness',
  'Yoga'
];
const music = ['Music', 'Concerts', 'Playing Instruments', 'Singing'];
const inside = ['Inside Activities', 'Video Gaming', 'Board Gaming'];
const culture = ['Culture', 'Museums', 'Reading', 'Movies/Cinema'];
const other = [
  'Photography',
  'Cooking',
  'Painting',
  'Travelling',
  'Sight Seeing'
];

// const interests = ['Culture', 'Video Gaming', 'Inside Activities'];

function Interests() {
  const { state, handleProfileFormChange} = useContext(AppContext);
  const [value, setValue] = useState(
    (state.unsavedProfileState && state.unsavedProfileState.interests) ||
      (state.profile && state.profile.interests) ||
      null
  );
  const initialState = { interests: value };
  const [interests, setInterests] = useState(initialState);

  const interestsChanged = value => {
    console.log(value);
    setInterests({ ...state, interests: value });
    const result = { target: { name: 'interests', value: value} };
    handleProfileFormChange(result);
  };

  return (
    <div>
      <label className='heading' id='checkbox-group'>
        Interests
      </label>
      <div className='row'>
        <div className='col-md interests'>
          {sports.map(sport => (
            <div key={sport}>
              <input
                key={sport}
                selected={sport === value ? true : false}
                value={sport.name}
                type='checkbox'
                name='interests'
                id={sport}
                onClick={interestsChanged}
                className='checkbox'
              />
              <label className='interest' htmlFor={sport}>
                {sport}
              </label>
            </div>
          ))}
        </div>
        <div className='col-md interests'>
          {music.map(music => (
            <div key={music}>
              <input
                key={music}
                selected={music === value ? true : false}
                value={music}
                type='checkbox'
                name='interests'
                id={music}
                onClick={interestsChanged}
                className='checkbox'
              />
              <label className='interest' htmlFor={music}>
                {music}
              </label>
            </div>
          ))}
        </div>
        <div className='col-md interests'>
          {inside.map(inside => (
            <div key={inside}>
              <input
                key={inside}
                selected={inside === value ? true : false}
                value={inside}
                type='checkbox'
                name='interests'
                id={inside}
                onClick={interestsChanged}
                className='checkbox'
              />
              <label className='interest' htmlFor={inside}>
                {inside}
              </label>
            </div>
          ))}
        </div>
        <div className='col-md interests'>
          {culture.map(culture => (
            <div key={culture}>
              <input
                key={culture}
                selected={culture === value ? true : false}
                value={culture}
                type='checkbox'
                name='interests'
                id={culture}
                onClick={interestsChanged}
                className='checkbox'
              />
              <label className='interest' htmlFor={culture}>
                {culture}
              </label>
            </div>
          ))}
        </div>
        <div className='col-md interests'>
          {other.map(other => (
            <div key={other}>
              <input
                key={other}
                selected={other === value ? true : false}
                value={other}
                type='checkbox'
                name='interests'
                id={other}
                onClick={interestsChanged}
                className='checkbox'
              />
              <label className='interest' htmlFor={other}>
                {other}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Interests;
