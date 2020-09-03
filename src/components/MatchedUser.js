import React from 'react';

const MatchedUser = ({ match: { user } }) => {
  return (
    <div className='d-flex justify-content-center'>
      <div
        className='card border border-info shadow'
        style={{ width: '40rem' }}
      >
        <div className='card-body bg-info d-flex flex-row'>
          <div className='flex-grow-1'>
            <p className='card-title nameText text-primary'>
              {`${user.name}`}, <small>29</small>
            </p>
            <p className='card-text'>
              <i>Location: {`${user.location}`}</i>
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
        <ul className='list-group list-group-flush'>
          <li className='list-group-item border-0'>About: {`${user.freetext}`}</li>
          <div className='row border-0'>
            <div className='col-7 border-0'>
              <li className='list-group-item border-0'>Gender: {`${user.gender}`}</li>
              <li className='list-group-item border-0'>
                Interests: {`${user.interests}`}
              </li>
            </div>
            <div className='col-5'>
              <li className='list-group-item border-0'>
                Native: {`${user.nativelang}`}
              </li>
              <li className='list-group-item border-0'>
                Learning: {`${user.learnlangs}`}
              </li>
              {/* <li className='list-group-item'>
            Other: {`${user.otherlangs}`}
          </li> */}
            </div>
          </div>
        </ul>
        <div className='card-body'>
          <a href='#' className='card-link'>
            Profile
          </a>
          <button className='card-link btn btn-outline-success mr-2'>
            + Add to Friends
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatchedUser;
