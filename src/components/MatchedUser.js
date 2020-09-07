import React from 'react';
import { Link } from 'react-router-dom';

const MatchedUser = ({ match: { user } }) => {
  return (
    <div className='d-flex justify-content-center '>
      <Link className="matchlink" to='/matchedUserProfile'>
        <div
          className='card border border-black-50 shadow matchlink1'
          style={{ width: '40rem' }}
        >
          <div className='card-body bg-light d-flex flex-row matchlink1'>
            <div className='flex-grow-1 '>
              <p className='card-title nameText'>
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
            {/* <Link to='#'>
              <button className='card-link btn btn-outline-success mr-2'>
                <i class="fas fa-plus"></i> Add to Friends
              </button>
            </Link> */}
            <Link to='./messages'>
              <button className='card-link btn btn-outline-success mr-2'>
                <i className="far fa-comments fa-2x"></i>
              </button>
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MatchedUser;
