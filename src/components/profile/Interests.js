import React, { useState, useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const interests = [
  'Sports',
  'Teamsports',
  'Extreme Sports',
  'Skating',
  'Running',
  'Fitness',
  'Yoga',
  'Music',
  'Concerts',
  'Playing Instruments',
  'Singing',
  'Inside Activities',
  'Video Gaming',
  'Board Gaming',
  'Culture',
  'Museums',
  'Reading',
  'Movies/Cinema',
  'Photography',
  'Cooking',
  'Painting',
  'Travelling',
  'Sight Seeing'
];
// const sports = [
//   'Sports',
//   'Teamsports',
//   'Extreme Sports',
//   'Skating',
//   'Running',
//   'Fitness',
//   'Yoga'
// ];
// const music = ['Music', 'Concerts', 'Playing Instruments', 'Singing'];
// const inside = ['Inside Activities', 'Video Gaming', 'Board Gaming'];
// const culture = ['Culture', 'Museums', 'Reading', 'Movies/Cinema'];
// const other = [
//   'Photography',
//   'Cooking',
//   'Painting',
//   'Travelling',
//   'Sight Seeing'
// ];

// const interests = ['Culture', 'Video Gaming', 'Inside Activities'];
// state.profile.interests
function Interests() {
  const { state, handleMultipleChoices } = useContext(AppContext);
  const [value, setValue] = useState('');

  return (
    <div>
      <label className='heading' id='checkbox-group'>
        Interests
      </label>
      <div className='row'>
      <div className='col-md interests'>
          {interests.map(interest => (
            <div key={interest}>
              <input
                key={interest}
                selected={interests.indexOf(interest) > -1 ? true : false}
                value={interest}
                type='checkbox'
                name='interests'
                id={interest}
                onChange={handleMultipleChoices}
                className='checkbox'
              />
              <label className='interest' htmlFor={interest}>
                {interest}
              </label>
            </div>
          ))}
        </div>
{/* 
        <div className='col-md interests'>
          {sports.map(interest => (
            <div key={interest}>
              <input
                key={interest}
                selected={interests.indexOf(interest) > -1 ? true : false}
                value={interest}
                type='checkbox'
                name='interests'
                id={interest}
                onChange={handleMultipleChoices}
                className='checkbox'
              />
              <label className='interest' htmlFor={interest}>
                {interest}
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
                onChange={handleMultipleChoices}
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
                onChange={handleMultipleChoices}
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
                onChange={handleMultipleChoices}
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
                onChange={handleMultipleChoices}
                className='checkbox'
              />
              <label className='interest' htmlFor={other}>
                {other}
              </label>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Interests;
