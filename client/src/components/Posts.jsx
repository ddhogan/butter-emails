import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  render() {
    return (
      <div>
        <p>All the posts</p>
        <Post />
      </div>
    )
  }
}

export default Posts;