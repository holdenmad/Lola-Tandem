import React, { useState } from 'react';
import SelectSearch from 'react-select-search';
import FileUpload from './utils/FileUpload';

function Avatar({ val, set, userId }) {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();

  const changed = value => {
    console.log(value);
    set(value);
  };

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
    const URL = `${process.env.REACT_APP_API}/profiles/upload/${userId}`;
    console.log(URL);

    fetch(URL, requestOptions)
      .then(res => res.json())
      .then(res => set(res.profileImgCreated.profileImg));
  };

  return (
    <div>
      <div className='form-group text-light'>
        <label className='heading text-light'>Profile Photo</label> <br />
        {/* Image Preview */}
        <img src={`${process.env.REACT_APP_API}/${val}`} alt='profile-photo' className="m-2 avatar" />
        <div className='container'>
          <div className='row'>
            <div className='form-group'>
              <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <input type='file' name='file' onChange={onFileChange} />
                {/* <input type='file' name='myImage' accept='image/*' /> */}

                <div className='form-group'>
                  <button className='btn btn-warning m-2' type='submit'>
                    Upload
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
