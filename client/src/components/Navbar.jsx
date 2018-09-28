import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { logout } from '../actions/authActions';

class Navbar extends Component {

  handleLogout = (e) => {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <small><Link to="/about">About</Link> | <Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/" onClick={(e)=> this.handleLogout(e)}>Log Out</Link></small> | { (!!this.props.currentUser.username) ? (<small>Welcome {this.props.currentUser.username}!</small>) : <small>you are not logged in</small>}
      </div>
    )
    
  }
}

const mapStateToProps = state => ({ currentUser: state.auth.currentUser });

export default Navbar = withRouter(connect(mapStateToProps, {logout})(Navbar));