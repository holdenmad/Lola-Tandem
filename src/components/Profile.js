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
                {`${state.profile.name}`}, <small>29</small>
              </p>
              <p className='card-text'>
                <i>Location: {`${state.profile.location}`}</i>
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
                About: {`${state.profile.freetext}`}
              </li>
              <div className='row border-0'>
                <div className='col-7 border-0'>
                  <li className='list-group-item border-0'>
                    Gender: {`${state.profile.gender}`}
                  </li>
                  <li className='list-group-item border-0'>
                    Interests: {`${state.profile.interests}`}
                  </li>
                </div>
                <div className='col-5'>
                  <li className='list-group-item border-0'>
                    Native: {`${state.profile.nativelang}`}
                  </li>
                  <li className='list-group-item border-0'>
                    Learning: {`${state.profile.learnlangs}`}
                  </li>
                  {/* <li className='list-group-item'>
            Other: {`${user.otherlangs}`}
          </li> */}
                </div>
              </div>
            </ul>
          </div>

          {/* Actual code to use to get the profile info */}
          <ul>
            <li>Name: {state.user ? state.user.name : null}</li>
            <li>Gender: {state.profile ? state.profile.gender : null}</li>
            <li>Location: {state.profile ? state.profile.location : null}</li>
            <li>Birthday: {state.profile ? state.profile.days + " " + state.profile.months + " " + state.profile.years : null}</li>
            <li>
              Native Languages: {state.profile ? state.profile.nativelang : null}
            </li>
            <li>
              Languages Learning: {state.profile ? state.profile.learnlangs : null}

            </li>
            <li>Interests: {state.profile ? state.profile.interests : null}</li>
            <li>About Text: {state.profile ? state.profile.freetext : null}</li>
            <li>Photot: {state.profile ? state.profile.profileImg : null}</li>
          </ul>
          <Link to='./editProfile'>
              <button className='btn btn-primary m-3'>Edit</button>
           </Link>

      </div>
    </div>
    </div>
  );
};

export default Profile;
