import React, {Component} from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';

class Navbar extends Component {
  // constructor(props) {
  //   super(props)
  // }

  handleLogout = (e) => {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <small><a href="/about">About</a> | <a href="/">Home</a> | <a href="/login">Login</a> | <button onClick={(e)=> this.handleLogout(e)}>Log Out</button></small> | { (!!this.props.current_user.username) ? (<small>Welcome {this.props.current_user.username}!</small>) : <small>you are not logged in</small>}
      </div>
    )
    
  }
}

const mapStateToProps = state => ({ current_user: state.users.current_user });

export default connect(mapStateToProps, {logout})(Navbar)