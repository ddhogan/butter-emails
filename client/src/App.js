import React from 'react';
import { Route } from 'react-router-dom';
import About from './components/About';
import LoginContainer from './components/user/LoginContainer';
import PostsContainer from './components/post/PostsContainer';
import PostEdit from './components/post/PostEdit';
import my_logo from './butter_emails.png';
import './css/App.css';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <img src={my_logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to ButterEmails</h1>
        <p><i>Another tiny Twitter clone</i></p>
      </header>
      <div className="App-body">
        <Route exact path="/" component={PostsContainer} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/edit" component={PostEdit} />
        <small><a href="/about">About</a> | <a href="/">Home</a> | <a href="/login">Login</a></small>
      </div>
    </div>
  );
}

export default App;