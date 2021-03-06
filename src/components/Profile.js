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
    fetch(
      `${process.env.REACT_APP_API}/profiles/${state.user._id}`,
      requestOptions
    )
      .then(res => res.json())
      .then(profile => {
        console.log(profile);
        setState(previousState => ({ ...previousState, profile }));
      });
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
          className='card royalpurple-bg border border-0 shadow m-5'
          style={{ width: '40rem' }}
        >
          <div className='card-body d-flex flex-row'>
            <div className='flex-grow-1 pl-2'>
              <p className='card-title nameText text-light pt-2'>
                {`${state.user ? state.user.name : null}`},{' '}
                <small>{state.profile ? years : null}</small>
              </p>
              <p className='card-text strong-orange'>
                <i className='pr-2'>
                  {`${state.profile ? state.profile.location : null}`},
                </i>
                <i>{`${state.profile ? state.profile.gender : null}`}</i>
              </p>
            </div>
            <div className='justify-content-end'>
              <img
                src={`1.png`}
                // src={`${process.env.REACT_APP_API}/${state.profile.profileImg}`}

                className='card-img-top avatar'
                alt={`${state.user.name}`}
              />
            </div>
          </div>

          <div className='bg-light' aria-label='Profile information of user'>
            {/* BUBBLE VERSION OF TOP OF PROFILE */}

            <div className='profile mt-4'>
              <div className='d-flex justify-content-end'>
                <div className='box2 sb2'>
                  ...learning
                  <span className='font-weight-bold pl-1'>{`${
                    state.profile ? state.profile.learnlangs : null
                  }`}</span>
                </div>
              </div>

              <div className='d-flex'>
                <div className='box1 sb1 mr-5'>
                  ...native in
                  <span className='font-weight-bold pl-1'>{` ${
                    state.profile ? state.profile.nativelang : null
                  }`}</span>
                </div>
                <h2 className='d-flex justify-content-start pt-3 iam'>
                  I am...
                </h2>
              </div>
              <div className='box3 sb3'>
                ...interested in
                <span className='font-weight-bold pl-1'>{`${
                  state.profile ? state.profile.interests : null
                }`}</span>
              </div>
            </div>

            <div className='profile'>
              <div className='mt-5'>
                <h2 className='h5 ml-3 mr-3 pr-2 pt-2 expectation-heading'>
                  About me
                </h2>
                {/* <h2 className="h4 ml-3 mr-3 heading">expectation me</h2> */}
                <p className='pl-4 pr-5 pt-2 spacing'>{`${
                  state.profile ? state.profile.freetext1 : null
                }`}</p>
              </div>
              <div className='mt-5'>
                <h2 className='h5 ml-3 mr-3 pr-2 pt-2 expectation-heading'>
                  My motivation for learning
                </h2>
                {/* <h2 className="h4 ml-3 mr-3 heading">My motivatin for learning {`${state.profile ? state.profile.learnlangs : null}`}</h2> */}
                <p className='pl-4 pr-5 pt-2 spacing'>{`${
                  state.profile ? state.profile.freetext2 : null
                }`}</p>
              </div>
              <div className='mt-5'>
                <h2 className='h5 ml-3 mr-3 pr-2 pt-2 expectation-heading'>
                  My ideal tandem
                </h2>
                {/* <h2 className="h4 ml-3 mr-3 heading">My expectations for a lola-Tandem / meeting</h2> */}
                <p className='pl-4 pr-5 pt-2 spacing'>{`${
                  state.profile ? state.profile.freetext3 : null
                }`}</p>
              </div>
            </div>
          </div>

          <div className='d-flex justify-content-end bg-light'>
            <Link to='./editprofile'>
              <button className='btn m-3 bg-orange'>Edit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
