import React from 'react';
import { NavLink } from 'react-router-dom';
import './LogIn.scss';

const LogIn = () => {
  // eslint-disable-next-line no-unused-vars
  const emailPattern = new RegExp(
    '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'
  );

  return (
    <section className="login-form">
      <h1 className="login-form__header">Welcome back</h1>
      <p className="login-form__text">
        Sign in to continue to IO Technologies.
      </p>
      <form className="login-form__form">
        <input
          type="email"
          required
          placeholder="Your email"
          className="login-form__email"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="login-form__password"
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
        <NavLink to="/reset" exact className="login-form__link">Reset</NavLink>
      </p>
    </section>
  );
};

export default LogIn;
