import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Support from './components/Support';
import LogIn from './components/LogIn';
import Reset from './components/Reset';

function App() {
  return (
    <div>
      <div className="background" />
      <div className="page">
        <Support />
        <Switch>
          <Route path="/" exact component={LogIn} />
          <Route path="/reset" exact component={Reset} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
