import React, { Component } from 'react';
import Posts from './Posts';
import PostInput from './PostInput';

class PostsContainer extends Component {
  render() {
    return (
      <div>
        <p>this is the posts container</p>
        <PostInput />
        <Posts />
      </div>
    )
  }
}

export default PostsContainer;