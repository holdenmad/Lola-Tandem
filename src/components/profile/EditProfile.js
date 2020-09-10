import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import Avatar from './Avatar';
import Birthday from './Birthday';
import FreeText from './FreeText';
import Interests from './Interests';
import Languages from './Languages';
import Dropdown from './Dropdown';
import { AppContext } from '../Context/AppContext';
import { cities } from './data/cities';
import { genders } from './data/genders';


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

  //useRef???
  //use state within small components
  //then grab is out of the component when the form is submitting
  //have the form edit its own state

  return (
    <div className='d-flex justify-content-center'>
      <form onSubmit={handleSubmit}>
        <div className='Profile d-flex justify-content-center'>
          <div
            className='card royalpurple-bg border border-0 shadow m-5'
            style={{ width: '50rem' }}
          >
            <div className='card-body d-flex flex-row '>
              <div className='flex-grow-1 '>
                <p className='card-title nameText text-light pt-2 pl-2'>
                  {`${state.user ? state.user.name : null}`}
                </p>
              </div>

              <div className='justify-content-end'>
                <Avatar val={avatar} set={setAvatar} userId={state.user._id} />
              </div>
            </div>

            <div aria-label='Profile information of user' className='bg-light'>
              <div className='profile mb-3'>
                <div className='row mb-2'>
                  <div className='col-sm'>

                    <Birthday val={birthday} set={setBirthday} />
                  </div>
                </div>
                <div className='row mb-3'>
                  <div className='col-sm'>
                    <Dropdown val={location} set={setLocation} title="Location" choices={cities} placeholder="Your location" />
                  </div>
                  <div className='col-sm'>
                    <Dropdown val={gender} set={setGender} title="Gender" choices={genders} placeholder="Your gender" />
                  </div>
                </div>
                <div className='row mb-3'>
                  <div className='col-sm'>
                    <Languages val={nativelang} set={setNativelang} title="Native Languages" placeholder="Native Languages"/>
                  </div>
                  <div className='col-sm'>
                    <Languages val={learnlangs} set={setLearnlangs} title="Learning Languages" placeholder="Learning Languages"/>
                  </div>
                </div>

                <div className='row mb-3'>
                  <div className='col-sm'>
                    <Interests val={interests} set={setInterests} />
                  </div>
                  <div className='col-sm'></div>
                </div>
                <FreeText val={freetext1} set={setFreetext1} title="Tell us something about yourself" placeholder="About you"/>
                <FreeText val={freetext2} set={setFreetext2} title="What is your motivation for learning a language?" placeholder="Your motivation"/>
                <FreeText val={freetext3} set={setFreetext3} title="Describe your ideal tandem" placeholder="Your ideal tandem"/>
              </div>
            </div>

            <div className='form-group bg-light'>
              <div className='m-2 mb-3 d-flex justify-content-between'>
                <Link to='./profile'>
                  <button className='btn ml-2 royalpurple-button'>
                    <i class='fas fa-arrow-left'></i> Profile
                  </button>
                </Link>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='btn bg-orange mr-2 '
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
        </div>
      </form>
    </div>
  );
}



