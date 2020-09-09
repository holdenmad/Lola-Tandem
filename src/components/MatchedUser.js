import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './Context/AppContext';
import calculateAge from './profile/utils/calculateAge';

const MatchedUser = ({ match: { user } }) => {
  const { state, setState } = useContext(AppContext);
  console.log(user.userId); //matched user's id
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
      .then(profile =>
        setState(previousState => ({ ...previousState, profile }))
      );
  }, []);

  const matchId = user.userId;
  const handleClick = () => {
    console.log('heyyyy');
    setState({ ...state, matchId });
  };

  return (
    <div className='d-flex justify-content-center '>
      <Link
        onClick={handleClick}
        className='matchlink'
        to={`/matchedUserProfile/${matchId}`}
      >
        <div>
          {/* This is the bootstrap code with profile info */}

          <div className='Profile d-flex justify-content-center'>
            <div
              className='card royalpurple-bg border border-0 shadow m-3'
              style={{ width: '35rem' }}
            >
              <div className=''>
                <div className='card-body'>
                  <div className='flex-grow-1'>
                    <p className='card-title nameText text-light'>
                      {`${user ? user.name : null}`},{' '}
                      <small>
                        {user ? calculateAge(user.birthday) : null} years old
                      </small>
                    </p>
                    <p className='card-text strong-orange'>
                      <i className='pr-2'>
                        {`${user ? user.location : null}`},
                      </i>
                      <i>{`${user ? user.gender : null}`}</i>
                    </p>
                  </div>
                  <div className='justify-content-end'>
                    <img
                      //HARD CODED FOR DEMO
                      src={`https://i.ibb.co/K23FS19/2.png`}
                      //REAL CODE
                      // src={`${process.env.REACT_APP_API}/${user.profileImg}`}
                      className='card-img-top avatar'
                      alt={`${user.name}`}
                    />
                  </div>
                  <div
                    className='bg-light p-1'
                    aria-label='Profile information of user'
                  >
                    <div className='profile'>
                      <div className='row'>
                        <div className='col-4 speechbubble'>
                          <i className='far fa-comments'></i>
                        </div>
                        <div className='col-8 speechtext'>
                          <div className=''>
                            ...native in
                            <span className='font-weight-bold pl-1'>{` ${
                              user ? user.nativelang : null
                            }`}</span>
                          </div>
                          <div>
                            ...learning
                            <span className='font-weight-bold pl-1'>{`${
                              user ? user.learnlangs : null
                            }`}</span>
                          </div>
                        </div>
                      </div>
                      <hr />

                      <div className='row d-flex flex-row-reverse'>
                        <div className='col-4 speechbubble2'>
                          <i className='fas fa-icons'></i>
                        </div>
                        <div className='col-8 speechtext'>
                          <div>
                            ...interested in
                            <span className='font-weight-bold pl-1'>{`${
                              user ? user.interests : null
                            }`}</span>
                          </div>
                        </div>
                      </div>
                      <hr />

                      <div className='row pb-4'>
                        <div className='col-4 speechbubble'>
                          <i class='far fa-grin-beam'></i>
                        </div>
                        <div className='col-8 speechtext'>
                          <div className=''>
                            {`${user ? user.freetext1 : null}`.substring(0, 60)}{' '}
                            ...
                          </div>
                        </div>
                      </div>
                    </div>
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
