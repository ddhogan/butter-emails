import React, { Component } from 'react';
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
        
        <PostsContainer />
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(App);
