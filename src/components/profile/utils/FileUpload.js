import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../../Context/AppContext';

const FileUpload = () => {
  const { state, setState, handleProfileFormChange } = useContext(AppContext);
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
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
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
    console.log('Test', file, fileName);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const profileData = new FormData(); //what is this?
    profileData.append('file', file); //can we use this?
    console.log(file, fileName);
    //how to write "If there is a profileImg, change it, if there isn't one, create it"?
    const requestOptions = {
      method: 'POST',
      body: profileData
    };
    fetch(
      `http://localhost:5000/profiles/upload/${state.user._id}`,
      requestOptions
    )
      .then(res => console.log(res))
      // .then(profile =>
      //   console.log(profile)
      // );
  };

  // console.log(state.profile);

  return (
    <div className='container'>
      <div className='row'>
        <div className='form-group'>
          <input type='file' onChange={onFileChange} />
        </div>
        <div className='form-group'>
          <button
            className='btn btn-warning'
            type='submit'
            onClick={handleSubmit}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
