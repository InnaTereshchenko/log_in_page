import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Support from './components/Support';
import LogIn from './components/LogIn';
import Reset from './components/Reset';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      <div className="background">
        <div className="wave-1" />
        <div className="wave-2" />
        <div className="wave-3" />
      </div>
      <div className="page">
        <Support />
        <Switch>
          <Route path="/" exact component={LogIn} />
          <Route path="/reset" exact component={Reset} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
