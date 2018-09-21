import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <h2>Login or Signup</h2>
        <p>This will be where users log in or sign up.</p>
        <ul>
          <li>email</li>
          <li>OAuth (maybe twitter?)</li>
          <li>Maybe <a href="https://openid.net/connect/">OpenID</a>, because OAuth is <a href="https://oauth.net/articles/authentication/">annoying.</a></li>
        </ul>
      </div>
    )
  }
}

export default Login;