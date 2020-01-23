import React from 'react';
import './Support.scss';

const Support = () => (
  <section className="support">
    <div className="support__logo">
      <img src="./images/IO_technologies_logo.png" alt="IO" height="30" />
      <h2 className="support__logo-text">Technologies</h2>
    </div>
    <p className="support__text">
      Get how-to help and instructions or specific features in
    </p>
    <div className="support__buttons">
      <button type="button" className="support__button">HELP CENTER</button>
      <p className="support__or">or</p>
      <button type="button" className="support__button">SUPPORT</button>
    </div>
  </section>
);

export default Support;
