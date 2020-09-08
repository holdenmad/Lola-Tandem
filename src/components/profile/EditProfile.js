import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import SelectSearch from 'react-select-search';

import Gender from './Gender';
import Avatar from './Avatar';
import Birthday from './Birthday';
// import BdayOld from './BdayOld';
import FreeText from './FreeText';
import FreeText2 from './FreeText2';
import FreeText3 from './FreeText3';
// import FreetextTest from './FreetextTest';
import Interests from './Interests';
import NativeLanguages from './NativeLang';
import LearningLanguages from './LearnLang';
import Location from './Location';
import { AppContext } from '../Context/AppContext';

// import { accountService, alertService } from "@/_services";

export default function EditProfile({ history, value, _id }) {
  const { state, setState, updateProfile } = useContext(AppContext);
  //   const user = accountService.userValue;
  const initialValue = {
    Avatar: '',
    Gender: '',
    Birthday: '',
    FreeText: '',
    FreeText2: '',
    FreeText3: '',
    // FreetextTest: '',
    Location: '',
    NativeLanguages: '',
    LearningLanguages: '',
    Interests: ''
  };
  const [formState, setFormState] = useState(initialValue);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      console.log("ssssssssssssssssssssssssssssssssssssssss");
      await updateProfile();
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
                <Avatar />
              </div>
            </div>

            <div aria-label='Profile information of user' className='bg-light '>
              <div className='profile mb-3'>
                <div className='row mb-3'>
                  <div className='col-sm'>
                    <Location />
                  </div>
                  <div className='col-sm'>
                    <Gender />
                  </div>
                  <div className='col-sm'>
                    <Birthday />
                  </div>
                </div>
                <div className='row mb-3'>
                  <div className='col-sm'>
                    <NativeLanguages />
                  </div>
                  <div className='col-sm'>
                    <LearningLanguages />
                  </div>
                </div>

                <div className='row mb-3'>
                  <div className='col-sm'>
                    <Interests />
                  </div>
                  <div className='col-sm'></div>
                </div>
                <FreeText value={formState.freetext} />
                <FreeText2 value={formState.freetext2} />
                <FreeText3 value={formState.freetext3} />
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
              {/* </Link> */}
                </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
