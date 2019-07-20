import React from 'react'
import Sidebar from './Sidebar';
import './loginForm.css'

function LoginForm(props) {
    return (
        <div className='loginFormContainer'>
        <Sidebar/>
          <h1>Login</h1>
          <form onSubmit={props.handleSignInSubmit}>
            <input
              onChange={props.inputChange}
              type='text'
              name='email'
              placeholder='Email'
            />
            <input
              onChange={props.inputChange}
              type='password'
              name='username'
              placeholder='Password'
            />
            <button>Sign In</button>
          </form>

          <form onSubmit={props.handleRegistrationSubmit}>
            <input
              onChange={props.inputChange}
              type='text'
              name='email'
              placeholder='Email'
            />
             <input
              onChange={props.inputChange}
              type='text'
              name='username'
              placeholder='username'
            />
            <input
              onChange={props.inputChange}
              type='password'
              name='username'
              placeholder='Password'
            />
            <button>Create Account</button> 
          </form>
        </div>
      )
    };

export default LoginForm