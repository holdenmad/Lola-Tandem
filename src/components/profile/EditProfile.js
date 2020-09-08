import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import SelectSearch from 'react-select-search';

import Gender from './Gender';
import Avatar from './Avatar';
import Birthday from './Birthday';
import FreeText from './FreeText';
import Interests from './Interests';
import Languages from './Languages';
import Location from './Location';
import { AppContext } from '../Context/AppContext';


export default function EditProfile({ history, value, _id }) {
  const { state, setState, updateProfile } = useContext(AppContext);

  const [avatar, setAvatar] = useState(state.profile && state.profile.avatar || null);
  const [location, setLocation] = useState(state.profile && state.profile.location || null);
  const [gender, setGender] = useState(state.profile && state.profile.gender || null);
  const [birthday, setBirthday] = useState(state.profile && state.profile.birthday || null);
  const [nativelang, setNativelang] = useState(state.profile && state.profile.nativelang || []);
  const [learnlangs, setLearnlangs] = useState(state.profile && state.profile.learnlangs || []);
  const [interests, setInterests] = useState(state.profile && state.profile.interests || []);
  const [freetext1, setFreetext1] = useState(state.profile && state.profile.freetext1 || null);
  const [freetext2, setFreetext2] = useState(state.profile && state.profile.freetext2 || null);
  const [freetext3, setFreetext3] = useState(state.profile && state.profile.freetext3 || null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      console.log("ssssssssssssssssssssssssssssssssssssssss");
      const update = {
        avatar,
        location,
        gender,
        birthday,
        nativelang,
        learnlangs,
        interests,
        freetext1,
        freetext2,
        freetext3
      };
      await updateProfile(update);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='d-flex justify-content-center'>
      <form onSubmit={handleSubmit}>
        <div className='Profile d-flex justify-content-center'>
          <div className='card cardcolor shadow m-5' style={{ width: '50rem' }}>
            <div className='card-body d-flex flex-row '>
              <div className='flex-grow-1 '>
                <p className='card-title nameText text-light'>
                  {`${state.user ? state.user.name : null}`}
                </p>
              </div>

              <div className='justify-content-end'>
                <Avatar val={avatar} set={setAvatar} />
              </div>
            </div>

            <div aria-label='Profile information of user' className='bg-light '>
              <div className='profile mb-3'>
                <div className='row mb-3'>
                  <div className='col-sm'>
                    <Location val={location} set={setLocation} />
                  </div>
                  <div className='col-sm'>
                    <Gender val={gender} set={setGender} />
                  </div>
                  <div className='col-sm'>
                    <Birthday val={birthday} set={setBirthday} />
                  </div>
                </div>
                <div className='row mb-3'>
                  <div className='col-sm'>
                    <Languages val={nativelang} set={setNativelang} title="Native Languages" />
                  </div>
                  <div className='col-sm'>
                    <Languages val={learnlangs} set={setLearnlangs} title="Learning Languages" />
                  </div>
                </div>

                <div className='row mb-3'>
                  <div className='col-sm'>
                    <Interests val={interests} set={setInterests} />
                  </div>
                  <div className='col-sm'></div>
                </div>
                <FreeText val={freetext1} set={setFreetext1} title="About you1" />
                <FreeText val={freetext2} set={setFreetext2} title="About you2" />
                <FreeText val={freetext3} set={setFreetext3} title="About you3" />
              </div>
            </div>

            <div className='form-group d-flex justify-content-end bg-light'>

              <button
                type='submit'
                disabled={isSubmitting}
                className='btn btn-outline-success mr-2 '
              >
                {/* <Link className='bg-light' to='./profile'> */}
                {isSubmitting && (
                  <span className='spinner-border spinner-border-sm mr-1 bg-light'></span>
                )}{' '}
                  Update
                </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
