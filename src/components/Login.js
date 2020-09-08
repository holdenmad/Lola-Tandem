import React, { useState,  useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { AppContext } from './Context/AppContext';

const Login = () => {
  const { authenticate, state } = useContext(AppContext);
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  });

  const handleChange = event => {
    event.persist();
    setFormState(prevState => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = event => {
    // console.log(formState);
    authenticate(event, formState, 'login');
    //redirect to dashboard on successful login
  };

  return !state.isLoggedIn ? (
    <div>
    <div className='text-light text-center m-5'>
        <h1>
          Welcome to <span className='logo display-3'>Lola</span>
        </h1>
        <div className='mediumtext'>a language tandem site</div>
      </div>
      <div className='row mt-5'>
        <div className='col-md-6 m-auto'>
          <div className='card card-body bg-light'>
            <h1 className='text-center mb-3'>
              <i className='fas fa-sign-in-alt'></i> Login
            </h1>
            <form method='POST' onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  onChange={handleChange}
                  id='email'
                  name='email'
                  value={formState.email}
                  className='form-control'
                  placeholder='Enter Email'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  onChange={handleChange}
                  id='password'
                  name='password'
                  value={formState.password}
                  className='form-control'
                  placeholder='Enter Password'
                />
              </div>
              <button
                type='submit'
                onClick={handleSubmit}
                className='btn royalpurple-button btn-block'
              >
                Login
              </button>
            </form>
            <p className='lead mt-4'>
              No account? <Link className="linkOrange" to='/users/register'>Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to='/dashboard' />
  );
};

export default Login;
