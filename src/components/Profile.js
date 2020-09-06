import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { AppContext } from './Context/AppContext';

const Profile = () => {
  // route = lola.com/users/profile-:id
  // Fetch request from MongoDB for Profile information
  // map that information into return statement below for each user that matches the {id} req.params
  const { state, setState } = useContext(AppContext);
  console.log(state, 'test');

  useEffect(() => {
    if (!state.user) return;

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    console.log(state);
    fetch(`http://localhost:5000/profiles/${state.user._id}`, requestOptions)
      .then(res => res.json())
      .then(profile =>
        setState(previousState => ({ ...previousState, profile }))
      );
  }, []);


  if (state.profile.birthday) {
    var DOB = state.profile.birthday;
    var millisecondsBetweenDOBAnd1970 = Date.parse(DOB);
    console.log(millisecondsBetweenDOBAnd1970);
    var millisecondsBetweenNowAnd1970 = Date.now();
    var ageInMilliseconds = millisecondsBetweenNowAnd1970 - millisecondsBetweenDOBAnd1970;
    var milliseconds = ageInMilliseconds;
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var month = day * 30;
    var year = day * 365;
    var years = Math.round(milliseconds / year);
}


  return (
    <div>
      {/* This is the bootstrap code with profile info */}
      <div className='Profile d-flex justify-content-center'>
        <div
          className='card border border-info shadow m-5'
          style={{ width: '40rem' }}
        >
          <div className='card-body bg-info d-flex flex-row'>
            <div className='flex-grow-1'>
              <p className='card-title nameText text-primary'>
                {`${state.user ? state.user.name : null}`}, <small>{state.profile ? years : null} years old</small>
              </p>
              <p className='card-text'>
                <i>Location: {`${state.profile ? state.profile.location : null}`}</i>
              </p>
            </div>
            <div className='justify-content-end'>
              <img
                src={`${state.profile.profileImg}`}
                className='card-img-top '
                alt={`${state.profile.name}`}
              />
            </div>
          </div>
          <div aria-label='Profile information of user'>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item border-0'>
                About you: <br />{`${state.profile ? state.profile.freetext : null}`}
              </li>
              <li className='list-group-item border-0'>
                About your interests: <br />{`${state.profile ? state.profile.freetext2 : null}`}
              </li>
              <li className='list-group-item border-0'>
               Your wish for a Tandem: <br />{`${state.profile ? state.profile.freetext3 : null}`}
              </li>
              <div className='row border-0'>
                <div className='col-7 border-0'>
                  <li className='list-group-item border-0'>
                    Gender: {`${state.profile ? state.profile.gender : null}`}
                  </li>   
                  <li className='list-group-item border-0'>
                    Interests: {`${state.profile ? state.profile.interests : null}`} 
                  </li>               
                </div>
                <div className='col-5'>
                  <li className='list-group-item border-0'>
                    Native: {`${state.profile ? state.profile.nativelang : null}`}
                  </li>
                  <li className='list-group-item border-0'>
                    Learning: {`${state.profile ? state.profile.learnlangs : null}`}
                  </li>
                </div>
              </div>
            </ul>
          </div>
          <Link to='./editProfile'>
              <button className='btn btn-primary m-3'>Edit</button>
           </Link>
      </div>
    </div>
    </div>
  );
};

export default Profile;
