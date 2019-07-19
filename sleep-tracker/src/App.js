import React from 'react';
import './App.css';
import Stats from './components/Stats';
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import ClockUI from './components/ClockUI'
import axios from 'axios'
import moment from 'moment'
import { Route } from 'react-router-dom';

class App extends React.Component {
  state = {
      user: {
          username: ' ',
          email:' ',
          password: ' ',
          isLoggedIn: true, 
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
    // this.setState({[this.state.sleeptimes.bedtime]: timeCapture}) this setState didnt work, why?
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

  render() {
    return (
      <div className="App">
        {/* <p>Hello World!</p> */}
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/login" render={props => <LoginForm {...props} inputChange={this.inputChange} handleSubmit={this.handleSubmit}/>}/>
        <Route exact path="/home" render={props => <ClockUI {...props} getBedTime={this.getBedTime} getWakeTime={this.getWakeTime}/>}/>
        <Route exact path="/stats" component={Stats}/>
      </div>
    );
  }
}

export default App;
