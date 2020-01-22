import React, { useState } from 'react';
import './LogIn.scss';

const LogIn = () => {
  const [email, setEmail] = useState('');

  return (
    <section className="login-form">
      <h1 className="login-form__header">Welcome back</h1>
      <p className="login-form__text">
        Sign in to continue to IO Technologies.
      </p>
      <form className="login-form__form">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder="Your email"
          className="login-form__email"
        />
        <input
          type="password"
          placeholder="Password"
          className="login-form__password"
          required
          minLength={8}
        />
        <button type="submit" className="login-form__button">LOG IN</button>
      </form>
      <p className="login-form__forgot">
        Forgot your password?
        <a href="/" className="login-form__link">Reset</a>
      </p>
    </section>
  );
};

export default LogIn;
