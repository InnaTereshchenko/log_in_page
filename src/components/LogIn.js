import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './LogIn.scss';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isEmailValid, setisEmailValid] = useState(false);
  const [isPasswordlValid, setisPasswordValid] = useState(false);
  const emailPattern = new RegExp(
    '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'
  );

  const handleForm = (event) => {
    const rightEmail = 'hello@world.com';
    const rightPassword = '12345678';

    event.preventDefault();
    if (email !== rightEmail) {
      setEmailError(true);
      setisEmailValid(false);
    }

    if (password !== rightPassword) {
      setPasswordError(true);
      setisPasswordValid(false);
    }

    if (email === rightEmail && password === rightPassword) {
      window.location.assign('http://localhost:3000/#/dashboard');
    }
  };

  const handleEmailValue = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
    setisEmailValid(emailPattern.test(e.target.value));
  };

  const handlePasswordValue = (e) => {
    setPassword(e.target.value);
    setPasswordError(false);
    setisPasswordValid(e.target.value.length === 8);
  };

  return (
    <section className="login-form">
      <div>
        <h1 className="login-form__header">Welcome back</h1>
        <p className="login-form__text">
          Sign in to continue to IO Technologies.
        </p>
        <form className="login-form__form" onSubmit={handleForm}>
          <input
            type="email"
            value={email}
            onChange={handleEmailValue}
            required
            placeholder="Your email"
            className={cn('login-form__email', {
              'not-valid': emailError,
              valid: isEmailValid,
              swing: emailError,
            })}
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordValue}
            placeholder="Password"
            required
            className={cn('login-form__password', {
              'not-valid': passwordError,
              valid: isPasswordlValid,
              swing: emailError,
            })}
            minLength={8}
          />
          <button type="submit" className="login-form__button">
            LOG IN
            <img
              src="./images/right-arrow.png"
              className="login-form__arrow"
              alt="arrow"
            />
          </button>
        </form>
        <p className="login-form__forgot">
          Forgot your password?
          <NavLink to="/reset" exact className="login-form__link">
            Reset
          </NavLink>
        </p>
      </div>
      <div>
        <div className={cn('login-form__error', {
          'login-form__error-email': emailError,
        })}
        >
          Oops! You entered an invalid email
        </div>
        <div className={cn('login-form__error', {
          'login-form__error-password': passwordError,
        })}
        >
          Oops! You entered an invalid password
        </div>
      </div>
    </section>
  );
};

export default LogIn;
