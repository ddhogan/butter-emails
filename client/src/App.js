import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from './components/About';
import Login from './components/Login';
import my_logo from './butter_emails.png';
import './App.css';
import PostsContainer from './components/post/PostsContainer';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/postActions'

class App extends Component {
  
  componentDidMount() {
    this.props.fetchPosts();
  }
  
  render() {
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
          <Route exact path="/login" component={Login} />
          <small><a href="/about">About</a> | <a href="/">Home</a> | <a href="/login">Login</a></small>
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(App);
