import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { createUser, loginUser, logoutUser } from '../actions/userActions';
import '../../css/Login.css';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    // login
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div className="login">
        <h2>Login</h2>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Username: </label>
          <input 
          type="text"
          name="username"
          value={this.state.username}
          onChange={(event) => this.handleChange(event)}
          />
          <br/>
          <label>Password: </label>
          <input type="password" name="password"/>
          <br/>
          <button type="submit">Log In</button>
        </form>
        <ul>
          <li><a href="/signup">Sign Up</a></li>
          <li>OAuth (maybe twitter?)</li>
          <li>Maybe <a href="https://openid.net/connect/">OpenID</a>, because OAuth is <a href="https://oauth.net/articles/authentication/">annoying.</a></li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({ users: state.users });

const mapDispatchToProps = dispatch => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);