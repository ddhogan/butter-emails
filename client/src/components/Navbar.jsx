import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { logout } from '../actions/authActions';
import '../css/Navbar.css'

class Navbar extends Component {

  handleLogout = (e) => {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="navbar">
        <small><strong><Link to="/about">About</Link> | <Link to="/">Home</Link> | </strong></small>
        { (!!this.props.currentUser.username) ? (<small><strong>Welcome {this.props.currentUser.username}! | <Link to="/" onClick={(e)=> this.handleLogout(e)}>Log Out</Link></strong></small>) : <small><strong><Link to="/login">Login</Link> | you are not logged in</strong></small>}
      </div>
    )
    
  }
}

const mapStateToProps = state => ({ currentUser: state.auth.currentUser });

export default Navbar = withRouter(connect(mapStateToProps, {logout})(Navbar));