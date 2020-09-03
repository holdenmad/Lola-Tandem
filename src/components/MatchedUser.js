import React from 'react';

const MatchedUser = ({ match: { user } }) => {
  return (
    <div>
      <div className='card' style={{ width: '40rem' }}>
        <img
          src={`${user.profileImg}`}
          className='card-img-top'
          alt={`${user.name}`}
        />
        <div className='card-body'>
          <h5 className='card-title'>{`${user.name}`}</h5>
          <p className='card-text'>About: {`${user.freetext}`}</p>
        </div>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>Location: {`${user.location}`}</li>
          <li className='list-group-item'>Gender: {`${user.gender}`}</li>
          <li className='list-group-item'>Interests: {`${user.interests}`}</li>
          <li className='list-group-item'>
            Native Languages: {`${user.nativelang}`}
          </li>
          <li className='list-group-item'>
            Other Languages: {`${user.otherlangs}`}
          </li>
        </ul>
        <div className='card-body'>
          <a href='#' className='card-link'>
            Profile
          </a>
          <a href='#' className='card-link'>
            Add to Friends
          </a>
        </div>
      </div>
    </div>
  );
};

export default MatchedUser;
