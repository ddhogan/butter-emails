import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authenticate } from '../../actions/authActions';
import '../../css/Login.css';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
    this.props.authenticate(this.state);
  }
  
  render() {
    return (
      <div className="login">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Email: </label>
          <input 
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange} />
          <br/>
          <label>Password: </label>
          <input
            type="password" 
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange} />
          <br/>
          <input type="submit" value="Login" />
        </form>
        <br />
        <h3>Or <a href="/signup">Sign Up</a> here!</h3>
      </div>
    )
  }
}

export default Login = withRouter(connect(null, {authenticate})(Login));