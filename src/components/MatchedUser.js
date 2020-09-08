import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './Context/AppContext';

const MatchedUser = ({ match: { user } }) => {
  const { state, setState } = useContext(AppContext);
  console.log(user.userId); //matched user's id
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


  const matchId = user.userId;
  const handleClick = () => {
    console.log('heyyyy');
    setState({ ...state, matchId });
    
  };

  return (
    <div className='d-flex justify-content-center '>
      {/* have matched user id in appcontext?
    last clicked user profile?
    userid in url */}
      <Link
        onClick={handleClick}
        className='matchlink'
        to={`/matchedUserProfile/${matchId}`}
      >
        <div>
          {/* This is the bootstrap code with profile info */}

          {/* '        <div className="profile">
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
            </div>' */}

          <div className='Profile d-flex justify-content-center'>
            <div
              className='card cardcolor shadow m-3'
              style={{ width: '40rem' }}
            >
              <div className='card-body d-flex flex-row'>
                <div className='flex-grow-1'>
                  <p className='card-title nameText text-light'>
                    {`${user ? user.name : null}`},{' '}
                    <small>{user ? years : null} years old</small>
                  </p>
                  <p className='card-text strong-orange'>
                    <i className='pr-2'>{`${user ? user.location : null}`},</i>
                    <i>{`${user ? user.gender : null}`}</i>
                  </p>
                </div>
                <div className='justify-content-end'>
                  <img
                    src={`${user.profileImg}`}
                    className='card-img-top '
                    alt={`${user.name}`}
                  />
                </div>
              </div>
              <div
                className='bg-light'
                aria-label='Profile information of user'
              >
                {/* BUBBLE VERSION OF TOP OF PROFILE */}

                <div className='profile mt-4'>
                  <div className='d-flex justify-content-end'>
                    <div className='box2 sb2'>
                      ...learning
                      <span className='font-weight-bold pl-1'>{`${
                        user ? user.learnlangs : null
                      }`}</span>
                    </div>
                  </div>
                  <div className='d-flex'>
                    <div className='box1 sb1 mr-5'>
                      ...native in
                      <span className='font-weight-bold pl-1'>{` ${
                        user ? user.nativelang : null
                      }`}</span>
                    </div>
                    <h2 className='d-flex justify-content-start pt-3 iam'>
                      {`${user ? user.name : null}`} is...
                    </h2>
                  </div>
                  <div className='box3 sb3'>
                    ...interested in
                    <span className='font-weight-bold pl-1'>{`${
                      user ? user.interests : null
                    }`}</span>
                  </div>
                </div>
                <div className='profile'>
                  <div className='mt-5'>
                    <h2 className='h5 ml-3 mr-3 pr-2 pt-2 expectation-heading'>
                      Read more about {`${user ? user.name : null}`}
                    </h2>
                    {/* <h2 className="h4 ml-3 mr-3 heading">expectation me</h2> */}
                    <p className='pl-4 pr-5 pt-2 spacing'>{`${
                      user ? user.freetext : null
                    }`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MatchedUser;
