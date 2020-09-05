import React, { useContext, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import FileUpload from './utils/FileUpload';

function Avatar() {
  const { state, handleProfileFormChange } = useContext(AppContext);
  const [value, setValue] = useState(
    (state.unsavedProfileState && state.unsavedProfileState.gender) ||
      (state.profile && state.profile.gender) ||
      null
  );

  return (
    <div>
      <div className='form-group'>
        <label className='heading'>Profile Photo</label> <br />
        <img src='{state.user.profileImg}' alt='profile-photo' width='100px' />
        <FileUpload />
      </div>
    </div>
  );
}

export default Avatar;
