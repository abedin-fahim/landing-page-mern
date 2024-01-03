import { useRef } from 'react';
import ContactImage from '/images/login.png';
import { useMutation } from 'react-query';
import { sendMessage } from '../utils/http';

const ContactPage = () => {
  const emailRef = useRef();
  const messageRef = useRef();

  const { mutate, isError, error } = useMutation({
    mutationFn: sendMessage,
  });

  const contactHandler = (e) => {
    e.preventDefault();

    let email = emailRef.current.value;
    let message = messageRef.current.value;

    // Handle Login
    mutate({ email, message });
  };

  return (
    <>
      <section className='contact-section'>
        <div className='container grid grid-two-cols'>
          <div>
            <img
              src={ContactImage}
              alt='contact Image'
              width='500'
              height='500'
            />
          </div>
          <div className='contact-form'>
            <form onSubmit={contactHandler}>
              <div className='form-control'>
                <label htmlFor='contact'>Email</label>
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
                <label htmlFor='message'>message</label>
                <textarea
                  type='text'
                  name='message'
                  id='message'
                  placeholder='message'
                  required
                  autoComplete='off'
                  ref={messageRef}
                />
              </div>
              <button type='submit'>Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
