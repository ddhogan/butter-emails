import React, {Component} from 'react';
import {connect} from 'react-redux';
import { logout } from '../actions/authActions';

class Navbar extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.logout();
    // this.props.history.push('/')
  }

  render() {
    return (
      <small><a href="/about">About</a> | <a href="/">Home</a> | <a href="/login">Login</a> | <button onClick={(e)=> this.handleLogout(e)}>Log Out</button></small>
    )
    
  }
}

export default connect(null, {logout})(Navbar)