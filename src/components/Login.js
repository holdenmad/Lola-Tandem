import React, { useState, useEffect, useContext } from 'react';
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

/*   useEffect(() => {
    console.log('isLoggedIn', state.isLoggedIn);
  }, [state.isLoggedIn]);
 */
  const handleSubmit = event => {
    console.log(formState);
    authenticate(event, formState, 'login');
    //redirect to dashboard on successful login
  };

  return !state.isLoggedIn ? (
    <div>
      <div className='row mt-5'>
        <div className='col-md-6 m-auto'>
          <div className='card card-body cardcolor'>
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
                className='btn btn-success btn-block'
              >
                Login
              </button>
            </form>
            <p className='lead mt-4'>
              No Account? <Link to='/users/register'>Register</Link>
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
