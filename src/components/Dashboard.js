import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import EditProfile from './profile/EditProfile';
import { AppContext } from './Context/AppContext';

function Dashboard() {
  const { state, logOut } = useContext(AppContext);
  return state.user ? (
    <div className='p-4'>
      <div>
        <h1 className='mt-4'>Dashboard</h1>
        <p className='lead mb-3'>Welcome Username</p>
        <button className='btn btn-secondary' onClick={logOut}>logout</button>
        <EditProfile/>
      </div>
    </div>
  ) : (
    <Redirect to='/users/login' />
  );
}

export default Dashboard;
