import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {LogIn, SignUp} from '../../Containers';
import './RegisterUser.css'

export default function RegisterUser() {
  const { pathname } = useLocation();
  let Navigate = useNavigate();
  const path = pathname.split('/', 2);
  const [currentChoice, setCurrentChoice] = useState(path[1]);

  function movetoLogin() {
    setCurrentChoice('login');
    Navigate('/login');
  }

  function movetoSignup() {
    setCurrentChoice('signup');
    Navigate('/signup');
  }

  return (
    <main id='register'>
      <section className='main-section'>
        <div id='register-choice' className='glass-bg'>
          <div id='login-choice' onClick={movetoLogin} className={`${currentChoice === 'login' ? 'main-bg': ''}`}>Login</div>
          <div id='signup-choice' onClick={movetoSignup} className={`${currentChoice === 'signup' ? 'main-bg': ''}`}>Signup</div>
        </div>
        <div className='form-container box-shadow'>
          {
            (path[1] === 'login') ? <LogIn /> : <SignUp />
          }
        </div>
      </section>
    </main>
  )
}
