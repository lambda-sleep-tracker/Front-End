import React from 'react';
import './App.css';
import Stats from './components/Stats';
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import ClockUI from './components/ClockUI'
import axios from 'axios'
import moment from 'moment'

class App extends React.Component {
  state = {
      user: {
          username: ' ',
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

  //capture current time as a numerical value
  //set state to that current time 
  getBedTime = () => {
    let hour = moment().format('h');
    let minutes = moment().format('mm');
    let timeCapture = parseInt(hour + minutes);
    console.log(timeCapture);

    console.log(this.state.sleeptimes.bedtime);
    this.setState({
      sleeptimes: {...this.state.sleeptimes, bedtime: timeCapture}
    })
  }

  getWakeTime = () => {
    let hour = moment().format('h');
    let minutes = moment().format('mm');
    let timeCapture = parseInt(hour + minutes);
    console.log(timeCapture);

    this.setState({
      sleeptimes: {...this.state.sleeptimes, waketime: timeCapture}
    })
    console.log(this.state.sleeptimes.waketime);
  }

  // getTime = () => {
  //   let currentTime = new Date(),
  //     hours = currentTime.getHours(),
  //     minutes = currentTime.getMinutes();

  //     console.log(hours, minutes);

  //     let clockTime = (hours + " : " + minutes);
  //     console.log(clockTime)

  //     this.setState({[this.state.user.wakeupTime]: clockTime})
  // }

  render() {
    return (
      <div className="App">
        {/* <p>Hello World!</p> */}
        <LandingPage inputChange={this.inputChange} handleSubmit={this.handleSubmit}/>
        <LoginForm/>
        <ClockUI getBedTime={this.getBedTime} getWakeTime={this.getWakeTime}/>
        <Stats />
      </div>
    );
  }
}

export default App;
