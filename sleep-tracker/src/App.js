import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import ClockUI from './components/ClockUI'


function App() {
  return (
    <div className="App">
      {/* <p>Hello World!</p> */}
      <LandingPage/>
      <LoginForm/>
      <ClockUI/>
    </div>
  );
}

export default App;
