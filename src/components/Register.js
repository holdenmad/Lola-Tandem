import React, { useState, useEffect, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { AppContext } from './Context/AppContext';

const Register = () => {
  const { state, setState, authenticate } = useContext(AppContext);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });
  useEffect(() => {}, [formState]);

  const handleChange = event => {
    event.persist();
    setFormState(prevState => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };
  const handleSubmit = event => {
    authenticate(event, formState, 'register');
  };

  return !state.isLoggedIn ? (
    <div>
      <div className='row mt-5'>
        <div className='col-md-6 m-auto'>
          <div className='card card-body'>
            <h1 className='text-center mb-3'>
              <i className='fas fa-user-plus'></i> Register
            </h1>

            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='form-control'
                  placeholder='Enter Name'
                  value={formState.name}
                  onChange={handleChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='form-control'
                  placeholder='Enter Email'
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  className='form-control'
                  placeholder='Create Password'
                  value={formState.password}
                  onChange={handleChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password2'>Confirm Password</label>
                <input
                  type='password'
                  id='password2'
                  name='password2'
                  className='form-control'
                  placeholder='Confirm Password'
                  value={formState.password2}
                  onChange={handleChange}
                />
              </div>

              <button type='submit' className='btn btn-success btn-block'>
                Register
              </button>
            </form>
            <p className='lead mt-4'>
              Have An Account? <Link to='/users/login'>Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to='/dashboard' />
  );
};

export default Register;
