import React from 'react';
import { Route } from 'react-router-dom';
import About from './components/About';
import Login from './components/user/Login';
import PostsContainer from './components/post/PostsContainer';
import PostEdit from './components/post/PostEdit';
import Header from './components/Header';
import './css/App.css';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={PostsContainer} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/edit" component={PostEdit} />
      <small><a href="/about">About</a> | <a href="/">Home</a> | <a href="/login">Login</a></small>
    </div>
  );
}

export default App;