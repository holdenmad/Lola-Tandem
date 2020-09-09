import React, { useContext, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Message from './Message';
import Message2 from './Message2';
import calculateAge from './profile/utils/calculateAge';

const MatchedUserProfile = () => {
  // const { profile, setProfile } = useState();
  const { id } = useParams();
  const  [matchedProfile, setMatchedProfile] = useState();

  useEffect(() => {
    console.log(matchedProfile);
  }, []);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    fetch(`${process.env.REACT_APP_API}/profiles/${id}`, requestOptions)
      .then(res => res.json())
      .then(matchProfile => setMatchedProfile( matchProfile ));
  }, []);

  return matchedProfile ? (
    <div>
      {/* This is the bootstrap code with profile info */}
      <div className='Profile d-flex justify-content-center'>
        <div className='card royalpurple-bg border border-0 shadow m-5' style={{ width: '40rem' }}>
          <div className='d-flex justify-content-between'>
            <Link to='/matches' className='link2'>
              <i class='fas fa-arrow-left'></i>
            </Link>
            <Message2 />
          </div>
          <div className='card-body d-flex flex-row'>
            <div className='flex-grow-1 pl-2'>
              <p className='card-title nameText text-light pt-2'>
                {`${matchedProfile ? matchedProfile.name : null}`},{' '}
                <small>{matchedProfile ? calculateAge(matchedProfile.birthday) : null}</small>
              </p>
              <p className='card-text strong-orange'>
                <i className='pr-2'>
                  {`${matchedProfile ? matchedProfile.location : null}`}
                  ,
                </i>
                <i>{`${
                  matchedProfile ? matchedProfile.gender : null
                }`}</i>
              </p>
            </div>
            <div className='justify-content-end'>
              <img
                src={`${process.env.REACT_APP_API}/${matchedProfile.profileImg}`}
                className='card-img-top avatar'
                alt={`${matchedProfile.name}`}
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
                    matchedProfile ? matchedProfile.learnlangs : null
                  }`}</span>
                </div>
              </div>
              <div className='d-flex'>
                <div className='box1 sb1 mr-5'>
                  ...native in
                  <span className='font-weight-bold pl-1'>{` ${
                    matchedProfile ? matchedProfile.nativelang : null
                  }`}</span>
                </div>
                <h2 className='d-flex justify-content-start pt-3 iam'>
                  I am...
                </h2>
              </div>
              <div className='box3 sb3'>
                ...interested in
                <span className='font-weight-bold pl-1'>{`${
                  matchedProfile ? matchedProfile.interests : null
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
                  matchedProfile ? matchedProfile.freetext1 : null
                }`}</p>
              </div>
              <div className='mt-5'>
                <h2 className='h5 ml-3 mr-3 pr-2 pt-2 expectation-heading'>
                  My motivation for learning
                </h2>
                {/* <h2 className="h4 ml-3 mr-3 heading">My motivatin for learning {`${matchedProfile ? matchedProfile.learnlangs : null}`}</h2> */}
                <p className='pl-4 pr-5 pt-2 spacing'>{`${
                  matchedProfile ? matchedProfile.freetext2 : null
                }`}</p>
              </div>
              <div className='mt-5'>
                <h2 className='h5 ml-3 mr-3 pr-2 pt-2 expectation-heading'>
                  My ideal tandem
                </h2>
                {/* <h2 className="h4 ml-3 mr-3 heading">My expectations for a lola-Tandem / meeting</h2> */}
                <p className='pl-4 pr-5 pt-2 spacing'>{`${
                  matchedProfile ? matchedProfile.freetext3 : null
                }`}</p>
              </div>
            </div>
            <div className='card-body'>
              {/* <div className='d-flex justify-content-start'> */}

              {/* </div> */}
            </div>
          </div>
          <div className='d-flex justify-content-between'>
            <Link to='/matches' className='text-light link'>
              <i class='fas fa-arrow-left'></i> Check out more matches
            </Link>
            <Message />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center">
    <h1 className="text-light">Loading...</h1>
    </div>
  );
};

export default MatchedUserProfile;
