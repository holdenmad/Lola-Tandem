import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AppContext } from './Context/AppContext';

function Dashboard() {
  const { state, logOut } = useContext(AppContext);
  return state.user ? (
    <div className='p-4'>
      <div>
        <h1 className='text-center mb-5'>Welcome {state.user.name}!</h1>
        {/* <img className="image" src="https://trello-attachments.s3.amazonaws.com/5f22b0c744d7080cde4bd7b8/5f50bf1029616c58694df4c4/d3f483afc05c2586c0673df0c73acdd7/hello-in-different-languages-word-cloud-illustration-id1194745913.jpeg" alt="hello" width="200px" /> */}
        {/* <button className='btn btn-secondary' onClick={logOut}>Logout</button> */}
        <div className='row'>
          <div className='col-lg'>
            <p className='p-5 ml-5 text'>
              Thanks for using our site to help you on your language learning
              journey! If you're here, you want to chat with real people who
              live in your city, but are tired of boring conversations in your
              target language. <br /> <br />
              With <i>Lola</i>, you'll be able to find language tandem partners
              based on your common interests, so you can have your language
              tandem while doing something you both love.
              <br/><br/>
              Let's get started! 
            </p>
          </div>
          <div className='col-lg'>
            <img
              className='text-center'
              src='../images/Canoeing.png'
              alt='hello'
              width='500px'
            />
          </div>
        </div>
        <button className='btn btn-primary btn-lg btn-block' onClick={logOut}>
          Find a tandem partner
        </button>
      </div>
    </div>
  ) : (
    <Redirect to='/users/login' />
  );
}

export default Dashboard;
