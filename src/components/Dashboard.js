import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AppContext } from './Context/AppContext';

function Dashboard() {
  const { state, logOut } = useContext(AppContext);
  return state.user ? (
    <div className='p-4'>
      <div>
        <p className='mt-4'>Dashboard</p>
        <img className="image" src="https://trello-attachments.s3.amazonaws.com/5f22b0c744d7080cde4bd7b8/5f50bf1029616c58694df4c4/d3f483afc05c2586c0673df0c73acdd7/hello-in-different-languages-word-cloud-illustration-id1194745913.jpeg" alt="hello" width="500px" />
        <h1 className='text-center mb-5'>User</h1>
        {/* <button className='btn btn-secondary' onClick={logOut}>Logout</button> */}
        <button className='btn btn-primary btn-lg btn-block' onClick={logOut}>Find a tandem partner</button>
      </div>
    </div>
  ) : (
    <Redirect to='/users/login' />
  );
}

export default Dashboard;
