import { useRef } from 'react';
import LoginImage from '/images/login.png';

const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const loginFormHandler = (e) => {
    e.preventDefault();

    let email = emailRef.current.value;
    let password = passwordRef.current.value;

    // Handle Login
    // console.log(email, password);
  };

  return (
    <>
      <section className='login-section'>
        <div className='container grid grid-two-cols'>
          <div className='login-image'>
            <img
              src={LoginImage}
              alt='Login Image'
              width='500'
              height='500'
            />
          </div>
          <div className='login-form'>
            <form onSubmit={loginFormHandler}>
              <div className='form-control'>
                <label htmlFor='login'>Email</label>
                <input
                  type='text'
                  name='login'
                  id='login'
                  placeholder='Email'
                  required
                  autoComplete='off'
                  ref={emailRef}
                />
              </div>
              <div className='form-control'>
                <label htmlFor='password'>password</label>
                <input
                  type='text'
                  name='password'
                  id='password'
                  placeholder='password'
                  required
                  autoComplete='off'
                  ref={passwordRef}
                />
              </div>
              <button type='submit'>Login</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
