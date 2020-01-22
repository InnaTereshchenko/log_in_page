import React from 'react';
import './App.scss';
import Support from './components/Support';
import LogIn from './components/LogIn';

function App() {
  return (
    <div>
      <div className="background" />
      <div className="page">
        <Support />
        <LogIn />
      </div>
    </div>
  );
}

export default App;
