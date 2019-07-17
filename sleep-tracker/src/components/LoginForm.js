import React from 'react'
import axios from 'axios'

class LoginForm extends React.Component {
  state = {
    user: [
      {
        email: ' ',
        password: ' ',
      }
    ]
  };
 
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


  render() {
    console.log(this.state)
    return (
        <div>
          <h1>Login</h1>

          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.inputChange}
              type='text'
              name='username'
              placeholder='Username'
            />
            <input
              onChange={this.inputChange}
              type='password'
              name='username'
              placeholder='Password'
            />
            <button>Sign In</button>
            <button>Create Account</button> 
          </form>

        </div>
      )
    };
};

export default LoginForm