import React, { useContext, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import FileUpload from './utils/FileUpload';

function Avatar() {
  const { state, handleProfileFormChange } = useContext(AppContext);
  // const [value, setValue] = useState(
  //   (state.unsavedProfileState && state.unsavedProfileState.profileImg) ||
  //     (state.profile && state.profile.profileImg) ||
  //     null
  // );

  return (
    <div>
      <div className='form-group text-light'>
        <label className='heading text-light'>Profile Photo</label> <br />
        <img src='{state.user.profileImg}' alt='profile-photo' width='100px' />
        <FileUpload />
      </div>
    </div>
  );
}

export default Avatar;
