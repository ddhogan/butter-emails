import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/authActions';
import '../../css/Login.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.signup(this.state)) {
      this.props.history.push('/')
      window.alert("Thanks for signing up!")
    } else {
      window.alert("We're having issues creating your account.")
    }
  }

  render() {
    return (
      <div className="login">
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange} />
          <br />
          <label>Email: </label>
          <input 
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange} />
          <br />
          <label>Password</label>
          <input 
            type="password" 
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange} />
          <br />
          <button type="submit" value="Sign Up">Sign Up</button>
          <p>Already have an account? <a href="/login">Log In</a></p>
        </form>
      </div>
    )
  }

}

export default connect(null, {signup})(SignUp);