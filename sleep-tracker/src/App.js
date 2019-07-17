import React from 'react';
import './App.css';
import Stats from './components/Stats';
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import ClockUI from './components/ClockUI'
import axios from 'axios'

class App extends React.Component {
  state = {
      user: {
          email:' ',
          password: ' '       
        },
       sleeptimes:{
          bedtime: 0,
          waketime: 1,
          sleepquality: 2,
          date: 3,
        }  
  };

  //input handlers
  inputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const endpoint = 'dummyUrl'
    axios
      .post(endpoint, this.state)
      .then (res => {
        localStorage.setItem('jwt', res.data.token)
        console.log(res)
      })
      .catch(error => console.log(error))
  }


  //capture and format the current time
  getTime = () => {
    let currentTime = new Date(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes();

      console.log(hours, minutes);

      let clockTime = (hours + " : " + minutes);
      console.log(clockTime)

      this.setState({[this.state.user.wakeupTime]: clockTime})
  }

  render() {
    return (
      <div className="App">
        {/* <p>Hello World!</p> */}
        <LandingPage inputChange={this.inputChange} handleSubmit={this.handleSubmit}/>
        <LoginForm/>
        <ClockUI getTime={this.getTime}/>
        <Stats />
      </div>
    );
  }
}

export default App;
