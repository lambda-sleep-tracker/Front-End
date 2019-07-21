import React from "react";
import "./App.css";
import Stats from "./components/Stats";
import LandingPage from "./components/LandingPage";
import LoginForm from "./components/LoginForm";
import ClockUI from "./components/ClockUI";
import axios from "axios";
import moment from "moment";
import { Route } from "react-router-dom";
import About from "./components/About";

class App extends React.Component {
  state = {
    isLoggedIn: true,
    userId: null,
    user: {
      username: " ",
      email: " ",
      password: " ",
    },
    sleeptimes: {
      bedtime: null,
      waketime: null,
      sleepquality: null,
      date: null
    }
  };

  // componentDidMount(){
  //   axios
  //     .get('https://lambda-sleep-tracker.herokuapp.com/api/users/')
  //     .then(res => this.setState({user: res.data[1]}), console.log('Users successfully grabbed'))
  // }

  //input handlers
  inputChange = event => {
    console.log(event.target.value)
    this.setState(
      {
        user: {
          ...this.state.user,
          [event.target.name]: event.target.value,
      }
    });
  };

  handleRegistrationSubmit = event => {
    event.preventDefault();
    const endpoint =
      "https://lambda-sleep-tracker.herokuapp.com/api/auth/register";
    axios
      .post(endpoint, this.state.user)
      .then(res => {
        localStorage.setItem("jwt", res.data.authToken);
        console.log(res);
      })
      .catch(error => console.log(error));
  };

  handleSignInSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state.user;

    try {
      const result = await axios.post(
        "https://lambda-sleep-tracker.herokuapp.com/api/auth/login",
        {
          email,
          password
        }
      );
      console.log(result);
      const token = result.data.authToken;
      localStorage.setItem("token", token);
      this.setState({isLoggedIn:true, userId: result.data.userId})
      // this.props.history.push('/users');
    } catch (err) {
      console.error(err);
    }
  };

  //capture sleep time and date as string
  //capture awake time as date and string
  //capture sleep rating 1-3 as value
  //post all data simultaneously to endpoint
  // getTime = event => {
  //   event.preventDefault();
  //   return moment().format('LLL')
  // }
  getBedTime = () => {
    let bedtime = moment().format('LLL')
    this.setState({
      sleeptimes: {...this.state.sleeptimes, bedtime: bedtime}
    })
    console.log('goodnight at ' + bedtime)
  }
  getWakeTime = () => {
    let waketime = moment().format('LLL')
    this.setState({
      sleeptimes: {...this.state.sleeptimes, waketime: waketime}
    })
    console.log('goodmorning at ' + waketime)
  }

  sleepTimeSubmitHandler = event => {
    const endpoint = 'https://lambda-sleep-tracker.herokuapp.com/api/users/sleeps'
    console.log(event.target.value)
    this.setState(
      {
        sleeptimes: {
          ...this.state.sleeptimes,
          sleepquality: event.target.value,
          user_id: this.state.userId,
          date: moment().format('LL')
      }
    }, () => console.log(this.state));

    if (this.state.sleeptimes.bedtime != null && this.state.sleeptimes.waketime != null){
      console.log('success')
      axios 
        .post(endpoint, this.state.sleeptimes)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    else console.log('condition not met')
  };
  
  render() {
    if (this.state.isLoggedIn) {
      return (
        <div className="App">
          {/* <p>Hello World!</p> */}
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/login"
            render={props => (
              <LoginForm
                {...props}
                inputChange={this.inputChange}
                handleSignInSubmit={this.handleSignInSubmit}
                handleRegistrationSubmit={this.handleRegistrationSubmit}
              />
            )}
          />
          <Route
            exact
            path="/home"
            render={props => (
              <ClockUI
                {...props}
                getBedTime={this.getBedTime}
                getWakeTime={this.getWakeTime}
                sleepTimeSubmitHandler={this.sleepTimeSubmitHandler}
              />
            )}
          />
          <Route
            exact
            path="/stats"
            render={props => (
              <Stats {...props} userName={this.state.user.username} />
            )}
          />
          <Route exact path="/about" component={About} />
        </div>
      );
    } else {
      return (
        <div className="App">
          {/* <p>Hello World!</p> */}
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/login"
            render={props => (
              <LoginForm
                {...props}
                inputChange={this.inputChange}
                handleSignInSubmit={this.handleSignInSubmit}
                handleRegistrationSubmit={this.handleRegistrationSubmit}
              />
            )}
          />
          <Route
            exact
            path="/home"
            render={props => (
              <LoginForm
                {...props}
                inputChange={this.inputChange}
                handleSignInSubmit={this.handleSignInSubmit}
                handleRegistrationSubmit={this.handleRegistrationSubmit}
              />
            )}
          />
          <Route
            exact
            path="/stats"
            render={props => (
              <LoginForm
                {...props}
                inputChange={this.inputChange}
                handleSignInSubmit={this.handleSignInSubmit}
                handleRegistrationSubmit={this.handleRegistrationSubmit}
              />
            )}
          />
          <Route exact path="/about" component={About} />
        </div>
      );
    }
  }
}

export default App;
