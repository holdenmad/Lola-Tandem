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
      await updateProfile();
    } catch (error) {
      console.log(error)
    }
    finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='d-flex justify-content-center'>
      <form onSubmit={handleSubmit}>
        <div className='Profile d-flex justify-content-center'>
          <div
            className='card border border-info shadow m-5'
            style={{ width: '50rem' }}
          >
            <div className='card-body bg-info d-flex flex-row'>
              <div className='flex-grow-1'>
                <p className='card-title nameText text-primary'>
                  {`${state.user ? state.user.name : null}`}
                </p>

              </div>

              <div className='justify-content-end'>
                <Avatar />
              </div>
            </div>

            <div aria-label='Profile information of user'>
              <div className="profile mb-3">
                <div class="row mb-3">
                  <div class="col-sm">
                    <Location />
                  </div>
                  <div class="col-sm">
                    <Gender />
                  </div>
                  <div class="col-sm">
                    <Birthday />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-sm">
                    <NativeLanguages />
                  </div>
                  <div class="col-sm">
                    <LearningLanguages />
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-sm">
                    <Interests />
                  </div>
                  <div class="col-sm">
                  </div>
                </div>
                <FreeText value={formState.freetext} />
                <FreeText2 value={formState.freetext2} />
                <FreeText3 value={formState.freetext3} />
              </div>
            </div>
            <Link to='./profile'>
            <div className='form-group d-flex justify-content-end'>
              <button
                type='submit'
                disabled={isSubmitting}
                className='btn btn-outline-success mr-2'
              >
                {isSubmitting && (
                  <span className='spinner-border spinner-border-sm mr-1'></span>
                )}{' '}
              Update
              </button>
            </div>
              </Link>

          </div>




        </div>
      </form>
    </div >

  );
}
