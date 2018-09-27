import React from 'react';
import { connect } from 'react-redux';
import my_logo from '../butter_emails.png';

const Header = () => {
  return (
    <header className="App-header">
      <img src={my_logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to ButterEmails</h1>
      <p><i>Another tiny Twitter clone</i></p>
      {/* {this.props.current_user.username ? <p>Welcome {this.props.current_user.username}!</p> : null} */}
    </header>
  )
}

const mapStateToProps = state => ({ current_user: state.users.current_user });

export default connect(mapStateToProps, null)(Header);