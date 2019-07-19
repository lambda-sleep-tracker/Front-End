import React from 'react'
import Sidebar from './Sidebar';
import './loginForm.css'

function LoginForm(props) {
    return (
        <div className='loginFormContainer'>
        <Sidebar/>
          <h1>Login</h1>
          <form onSubmit={props.handleSubmit}>
            <input
              onChange={props.inputChange}
              type='text'
              name='username'
              placeholder='Username'
            />
            <input
              onChange={props.inputChange}
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

export default LoginForm