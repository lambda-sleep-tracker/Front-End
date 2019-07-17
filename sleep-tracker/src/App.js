import React from 'react';
import './App.css';
import Stats from './components/Stats'
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import ClockUI from './components/ClockUI'

function App() {
  return (
    <div className="App">
      <Stats />
      {/* <p>Hello World!</p> */}
      <LandingPage/>
      <LoginForm/>
      <ClockUI/>
    </div>
  );
}

export default App;
