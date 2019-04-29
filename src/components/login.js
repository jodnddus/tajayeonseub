import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <p>Login Page</p>
        <div className="inputBlock">
          <input type="text" placeholder="Email"></input><br />
          <input type="text" placeholder="Password"></input>
        </div>
        <div className="loginBtn">
          <button>Login</button>
        </div>
        <div className="socialLogin">
          <button>Login with GOOGLE</button><br />
          <button>Login with FACEBOOK</button>
        </div>
        <Link to={'/test'}>to test</Link>
      </div>
    );
  }
}

export default Login;
