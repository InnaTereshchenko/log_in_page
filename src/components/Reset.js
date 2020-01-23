import React from 'react';
import './Reset.scss';
import { NavLink } from 'react-router-dom';

const Reset = () => (
  <section className="reset">
    <h1 className="reset__header">Forgot password?</h1>
    <form className="reset__form">
      <input
        type="email"
        required
        placeholder="Enter your email"
        className="reset__email"
      />
      <button type="submit" className="reset__button">
        SEND ME INSTRUCTIONS
      </button>
    </form>
    <p className="reset__remembered">
      Remembered password?
      <NavLink to="/" exact className="reset__link">
        Log in
      </NavLink>
    </p>
  </section>
);

export default Reset;
