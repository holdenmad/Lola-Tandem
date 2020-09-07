import React from 'react';
import { AppContext } from '../../Context/AppContext';

export default function CheckBox({
  id,
//   handleCheckChildElement,
  handleChange,
  isChecked,
  value
}) {
  return (
    <div className='col-md interests'>
      
          <input
            key={id}
            // onChange={handleCheckChildElement}
            onChange={handleChange}
            type='checkbox'
            name='interests'
            checked={isChecked}
            value={value}
            className='checkbox'
          />
          <label className='interest' htmlFor={value}>
            {value}
          </label>
        </div>
     
  );
}
