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
    user: {
      email: " ",
      username: " ",
      password: " ",
      user_id: null,
    },
    sleeptimes: {
      bedtime: 0,
      waketime: 1,
      sleepquality: 2,
      date: 3
    }
  };

  // componentDidMount(){
  //   axios
  //     .get('https://lambda-sleep-tracker.herokuapp.com/api/users/')
  //     .then(res => this.setState({user: res.data[1]}), console.log('Users successfully grabbed'))
  // }

  //input handlers
  inputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
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

      // this.props.history.push('/users');
    } catch (err) {
      console.error(err);
    }
    // event.preventDefault();
    // const user = {email: this.state.user.email, password: this.state.user.password};
    // // const { email, password } = this.state.user;
    // console.log(user);
    // const endpoint = 'https://lambda-sleep-tracker.herokuapp.com/api/auth/login';
    // axios
    //   .post(endpoint, user)
    //   .then (res => {
    //     console.log(res.data)
    //     const token = res.data.authToken;
    //     console.log(token);
    //     localStorage.setItem('jwt', token);
    //   })
    //   .catch(error => console.log(error))
  };

  //capture current time as a numerical value
  //set state to that current time
  getBedTime = () => {
    let hour = moment().format("h");
    let minutes = moment().format("mm");
    let timeCapture = parseInt(hour + minutes);
    console.log(timeCapture);
    let now = moment();
    console.log(now)
    console.log(this.state.sleeptimes.bedtime);
    // this.setState({[this.state.sleeptimes.bedtime]: timeCapture}) this setState didnt work, why?
    this.setState({
      sleeptimes: { ...this.state.sleeptimes, bedtime: timeCapture }
    });
  };

  getWakeTime = () => {
    // const value = e.target.value;
    let hour = moment().format("h");
    let minutes = moment().format("mm");
    let timeCapture = parseInt(hour + minutes);
    this.setState({
      sleeptimes: { ...this.state.sleeptimes, waketime: timeCapture }
    });
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
                handleSubmit={this.handleSubmit}
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
                handleSubmit={this.handleSubmit}
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
                handleSubmit={this.handleSubmit}
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
