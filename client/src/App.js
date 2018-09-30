import React from 'react';
import { Route } from 'react-router-dom';
import About from './components/About';
import Login from './components/user/Login';
import PostsContainer from './components/post/PostsContainer';
import PostEdit from './components/post/PostEdit';
import Header from './components/Header';
import SignUp from './components/user/SignUp';
import Navbar from './components/Navbar';
import './css/App.css';


const App = () => {

  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={PostsContainer} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/edit/:id" component={PostEdit} />
      <Navbar />
    </div>
  );
}

export default App;