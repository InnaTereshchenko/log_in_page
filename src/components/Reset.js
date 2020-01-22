import React from 'react';
import './Reset.scss';

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
  </section>
);

export default Reset;
