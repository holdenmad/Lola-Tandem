import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { AppContext } from './Context/AppContext';

const Profile = () => {
  // route = lola.com/users/profile-:id
  // Fetch request from MongoDB for Profile information
  // map that information into return statement below for each user that matches the {id} req.params
  const { state, setState } = useContext(AppContext);
  // console.log(state, 'test');

  useEffect(() => {
    if (!state.user) return;

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    fetch(`http://localhost:5000/profiles/${state.user._id}`, requestOptions)
      .then(res => res.json())
      .then(profile =>
        setState(previousState => ({ ...previousState, profile }))
      );
  }, []);

  if (state.profile.birthday) {
    var DOB = state.profile.birthday;
    var millisecondsBetweenDOBAnd1970 = Date.parse(DOB);
    var millisecondsBetweenNowAnd1970 = Date.now();
    var ageInMilliseconds =
      millisecondsBetweenNowAnd1970 - millisecondsBetweenDOBAnd1970;
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
                {`${state.user ? state.user.name : null}`},{' '}
                <small>{state.profile ? years : null} years old</small>
              </p>
              <p className='card-text'>
                <i className='pr-2'>
                  {`${state.profile ? state.profile.location : null}`},
                </i>
                <i>{`${state.profile ? state.profile.gender : null}`}</i>
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
            {/* TEXT VERSION OF TOP OF PROFILE */}
            {/* <div className="profile">
              <div class="row mt-4">
                <div class="col-5">
                  <h2 className="d-flex justify-content-end pt-3 iam">I am...</h2>
                </div>
                <div class="col-7">
                  <div class="spacing">
                    ...native in<span className="font-weight-bold pl-1">{` ${state.profile ? state.profile.nativelang : null}`}</span>
                  </div>
                  <div class="spacing">
                    ...learning<span className="font-weight-bold pl-1">{`${state.profile ? state.profile.learnlangs : null}`}</span>
                  </div>
                  <div class="spacing">
                    ...interested in<span className="font-weight-bold pl-1">{`${state.profile ? state.profile.interests : null}`}</span>
                  </div>
                </div>
              </div>
            </div> */}

            {/* BUBBLE VERSION OF TOP OF PROFILE */}
            <div className='profile'>
              <div class='row mt-3'>
                <div class='col'></div>
                <div class='col'>
                  <div class='box2 sb2'>
                    ...learning
                    <span className='font-weight-bold pl-1'>{`${
                      state.profile ? state.profile.learnlangs : null
                    }`}</span>
                  </div>
                </div>
              </div>
              <div class='row'>
                <div class='col-5'>
                  <div class='box1 sb1'>
                    ...native in
                    <span className='font-weight-bold pl-1'>{` ${
                      state.profile ? state.profile.nativelang : null
                    }`}</span>
                  </div>
                </div>
                <div class='col-7'>
                  <h2 className='d-flex justify-content-start pt-3 iam'>
                    I am...
                  </h2>
                </div>
              </div>
              <div class='row'>
                <div class='box3 sb3'>
                  ...interested in
                  <span className='font-weight-bold pl-1'>{`${
                    state.profile ? state.profile.interests  : null
                  }`}</span>
                </div>
              </div>
            </div>

            <div className='profile'>
              <div className='mt-5'>
                <h2 className='h4 ml-3 mr-3 about-heading'>About me</h2>
                {/* <h2 className="h4 ml-3 mr-3 heading">About me</h2> */}
                <p className='pl-4 pr-5 pt-2 spacing'>{`${
                  state.profile ? state.profile.freetext : null
                }`}</p>
              </div>
              <div className='mt-5'>
                <h2 className='h4 ml-3 mr-3 motivation-heading'>
                  My motivation for learning{' '}
                  {`${state.profile ? state.profile.learnlangs : null}`}
                </h2>
                {/* <h2 className="h4 ml-3 mr-3 heading">My motivatin for learning {`${state.profile ? state.profile.learnlangs : null}`}</h2> */}
                <p className='pl-4 pr-5 pt-2 spacing'>{`${
                  state.profile ? state.profile.freetext2 : null
                }`}</p>
              </div>
              <div className='mt-5'>
                <h2 className='h4 ml-3 mr-3 expectation-heading'>
                  My ideal tandem
                </h2>
                {/* <h2 className="h4 ml-3 mr-3 heading">My expectations for a lola-Tandem / meeting</h2> */}
                <p className='pl-4 pr-5 pt-2 spacing'>{`${
                  state.profile ? state.profile.freetext3 : null
                }`}</p>
              </div>
            </div>
          </div>
          <Link to='./editProfile'>
            <div className='d-flex justify-content-end'>
              <button className='btn btn-primary m-3'>Edit</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
