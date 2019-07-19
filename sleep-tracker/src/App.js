import React from 'react';
import './App.css';
import Stats from './components/Stats';
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import ClockUI from './components/ClockUI'
import axios from 'axios'
import moment from 'moment'
import { Route } from 'react-router-dom';
import About from './components/About';

class App extends React.Component {
  state = {
      isLoggedIn: true,
      user: {
          username: ' ',
          email:' ',
          password: ' ', 
          user_id: 1,
        },
       sleeptimes:{
          bedtime: 0,
          waketime: 1,
          sleepquality: 2,
          date: 3,
        }  
  };

  componentDidMount(){
    axios
      .get('https://lambda-sleep-tracker.herokuapp.com/api/users/')
      .then(res => this.setState({user: res.data[1]}), console.log('Users successfully grabbed'))   
  }

  //input handlers
  inputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleRegistrationSubmit = event => {
    event.preventDefault();
    const endpoint = 'https://lambda-sleep-tracker.herokuapp.com/api/auth/register';
    axios
      .post(endpoint, this.state)
      .then (res => {
        localStorage.setItem('jwt', res.data.token)
        console.log(res)
      })
      .catch(error => console.log(error))
  }

  handleSignInSubmit = event => {
    event.preventDefault();
    const endpoint = 'https://lambda-sleep-tracker.herokuapp.com/api/auth/login';
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
    // const value = e.target.value;
    let hour = moment().format('h');
    let minutes = moment().format('mm');
    let timeCapture = parseInt(hour + minutes);
    this.setState({
      sleeptimes: {...this.state.sleeptimes, waketime: timeCapture}
    })
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <div className="App">
          {/* <p>Hello World!</p> */}
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/login" render={props => <LoginForm {...props} inputChange={this.inputChange} handleSubmit={this.handleSubmit}/>}/>
          <Route exact path="/home" render={props => <ClockUI {...props} getBedTime={this.getBedTime} getWakeTime={this.getWakeTime}/>}/>
          <Route exact path="/stats" render={props => <Stats {...props} userName={this.state.user.username}/>}/>
          <Route exact path="/about" component={About}/>
        </div>
      );
    }

    else {
      return (
        <div className="App">
        {/* <p>Hello World!</p> */}
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/login" render={props => <LoginForm {...props} inputChange={this.inputChange} handleSubmit={this.handleSubmit}/>}/>
        <Route exact path="/home" render={props => <LoginForm {...props} inputChange={this.inputChange} handleSubmit={this.handleSubmit}/>}/>
        <Route exact path="/stats" render={props => <LoginForm {...props} inputChange={this.inputChange} handleSubmit={this.handleSubmit}/>}/>
        <Route exact path="/about" component={About}/>
      </div>
      )
    }
  }
}

export default App;
