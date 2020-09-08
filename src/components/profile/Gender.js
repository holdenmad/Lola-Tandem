import React from 'react';
import SelectSearch from 'react-select-search';

const genders = ['', 'other', 'female', 'male'];

function Gender({val, set}) {
  const changed = (e) => {
    console.log(e.target.value);
    set(e.target.value)
}

  return (
    <div>
      <label className='heading'>Gender</label>
      <select
        onChange={changed}
        as='select'
        name='gender'
        className='form-control medium'
        value={val}
      >
        {genders.map(gender => (
          <option
            key={gender}
            defaultValue={gender === val ? true : false}
            value={gender}
          >
            {gender}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Gender;
