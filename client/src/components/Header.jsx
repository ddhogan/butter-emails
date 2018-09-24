import React from 'react';
import my_logo from '../butter_emails.png';

const Header = () => {
  return (
    <header className="App-header">
      <img src={my_logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to ButterEmails</h1>
      <p><i>Another tiny Twitter clone</i></p>
    </header>
  )
}

export default Header;