import React from 'react';
import SelectSearch from 'react-select-search';
import FileUpload from './utils/FileUpload';

function Avatar({val, set}) {
  const changed = (value) => {
    console.log(value);
    set(value)
}

  return (
    <div>
      <div className='form-group text-light'>
        <label className='heading text-light'>Profile Photo</label> <br />
        <img src='{state.user.profileImg}' alt='profile-photo' width='100px' />
        {/* <FileUpload /> */}
      </div>
    </div>
  );
}

export default Avatar;
