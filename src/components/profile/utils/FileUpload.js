import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../../Context/AppContext';

const FileUpload = () => {
  const { state, setState } = useContext(AppContext);
  //fetch request from server for multer logic
  //   useEffect(() => {
  //     const requestOptions = {
  //       method: 'GET',
  //       headers: { 'Content-Type': 'application/json' }
  //     };
  //     fetch(`http://localhost:5000/profiles/${state.user._id}`, requestOptions)
  //       .then(res => res.json())
  //       .then(profile =>
  //         setState(previousState => ({ ...previousState, profile }))
  //       );
  //   }, []);

  const onFileChange = e => {
    setState({ profileImg: e.target.files[0] });
  };

  const onSubmit = e => {
    e.preventDefault();
    //how to write "If there is a profileImg, change it, if there isn't one, create it"?
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    fetch(`http://localhost:5000/profiles/${state.user._id}`, requestOptions)
      .then(res => res.json())
      .then(profile =>
        setState(previousState => ({ ...previousState, profile }))
      );
    const profileData = new FormData(); //what is this?
    profileData.append('profileImg', state.profile.profileImg); //can we use this?
  };

  console.log(state.profile);

  return (
    <div className='container'>
      <div className='row'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input type='file' onChange={onFileChange} />
          </div>
          <div className='form-group'>
            <button className='btn btn-primary' type='submit'>
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FileUpload;
