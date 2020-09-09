import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../../Context/AppContext';

const FileUpload = () => {
  const { state, setState, handleProfileFormChange } = useContext(AppContext);
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
  // fetch request from server for multer logic
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    fetch(
      `${process.env.REACT_APP_API}/profiles/${state.user._id}`,
      requestOptions
    )
      .then(res => res.json())
      .then(profile =>
        setState(previousState => ({ ...previousState, profile }))
      );
  }, []);

  const onFileChange = e => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const profileData = new FormData(); //what is this?
    profileData.append('file', file); //can we use this?
    console.log('Test', file, fileName);
    //how to write "If there is a profileImg, change it, if there isn't one, create it"?
    const requestOptions = {
      method: 'POST',
      body: profileData
    };
    const URL = `${process.env.REACT_APP_API}/profiles/upload/${state.user._id}`;
    console.log(URL);

    fetch(URL, requestOptions)
      .then(res => res.json())
      .then(profile => console.log(profile));
  };

  // console.log(state.profile);

  return (
    <div className='container'>
      <div className='row'>
        <div className='form-group'>
          <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <input type='file' name='file' onChange={onFileChange} />
            {/* <input type='file' name='myImage' accept='image/*' /> */}

            <div className='form-group'>
              <button className='btn btn-warning' type='submit'>
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
