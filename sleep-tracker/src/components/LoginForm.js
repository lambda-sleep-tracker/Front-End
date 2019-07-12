import React from 'react'

class LoginForm extends React.Component {
  state = {
    user: [
      {
        username: ' ',
        password: ' ',
      }
    ]
  };
 
  inputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  userSignIn = (event) => {
    event.preventDefault();
  }

  render() {
    console.log(this.state)
    return (
        <div>
          <h1>Login</h1>

          <form>
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
            <button onClick={this.userSignIn}></button>
          </form>
        </div>
      )
    };
};

export default LoginForm