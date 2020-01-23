import React from 'react';
import './Dashboard.scss';

const Dashboard = () => (
  <section className="dashboard">
    <h1 className="dashboard__header">
      Hi,
      {' '}
      <strong>Nikita!</strong>
    </h1>
    <p className="dashboard__text">Please choose your project.</p>
    <ul className="dashboard__list">
      <li className="dashboard__item">Flirch</li>
      <li className="dashboard__item">io</li>
      <li className="dashboard__item">company name</li>
      <li className="dashboard__item">facenews.com</li>
      <li className="dashboard__item">hello world</li>
      <li className="dashboard__item">sunday</li>
      <li className="dashboard__item">some job</li>
    </ul>
  </section>
);

export default Dashboard;
