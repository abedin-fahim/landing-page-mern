import { useState } from 'react';
import RegisterImage from '/images/register.png';

const SignupPage = () => {
  // Different way to handle the input
  // useRef, useContext, or redux-toolkit are different ways to handling form submission
  const [user, setUser] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  const userHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    

    setUser({
      ...user,
      [name]: value,
    });
  };
  const userSubmitHandler = (e) => {
    e.preventDefault();

    // Registration handling
  };

  return (
    <>
      <section className='registration-section'>
        <div className='container grid grid-two-cols'>
          <div className='registration-image'>
            <img
              src={RegisterImage}
              alt='Register Image'
              height='500'
              width='500'
            />
          </div>
          <div className='registration-form'>
            <h1 className='main-heading mb-3'>registration form</h1>
            <form onSubmit={userSubmitHandler}>
              <div className='form-control'>
                <label htmlFor='username'>Username</label>
                <input
                  type='text'
                  name='username'
                  id='username'
                  placeholder='Username'
                  required
                  autoComplete='off'
                  value={user.username}
                  onChange={userHandler}
                />
              </div>
              <div className='form-control'>
                <label htmlFor='email'>email</label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='email'
                  required
                  autoComplete='off'
                  value={user.email}
                  onChange={userHandler}
                />
              </div>
              <div className='form-control'>
                <label htmlFor='phone'>phone</label>
                <input
                  type='number'
                  name='phone'
                  id='phone'
                  placeholder='phone'
                  required
                  autoComplete='off'
                  value={user.phone}
                  onChange={userHandler}
                />
              </div>
              <div className='form-control'>
                <label htmlFor='password'>password</label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='password'
                  required
                  autoComplete='off'
                  value={user.password}
                  onChange={userHandler}
                />
              </div>
              <button
                type='submit'
                className='btn-submit'
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignupPage;
