import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { createUser, loginUser, logoutUser } from '../actions/userActions';
import { authenticate } from '../../actions/authActions';
import '../../css/Login.css';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      // username: '',
      email: '',
      password: '',
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  
  
  handleSubmit = event => {
    event.preventDefault();
    if (this.props.authenticate(this.state)) {
      this.props.history.push('/user_profile')
      window.alert("You logged in!")
    } else {
      window.alert("Sorry, something went wrong, please try again.")
    }
  }
  
  render() {
    return (
      <div className="login">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Email: </label>
          <input 
          label="Email"
          type="text"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange} />
          <br/>
          <label>Password: </label>
          <input 
            label="Password"
            type="password" 
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange} />
          <br/>
          <button type="submit" value="Login">Log In</button>
        </form>
        <hr />
        <br />
        <h3>Or <a href="/signup">Sign Up</a> here!</h3>
        <ul> Other thoughts...
          <li>OAuth (maybe twitter?)</li>
          <li>Maybe <a href="https://openid.net/connect/">OpenID</a>, because OAuth is <a href="https://oauth.net/articles/authentication/">annoying.</a></li>
        </ul>
      </div>
    )
  }
}


export default connect(null, {authenticate})(Login);