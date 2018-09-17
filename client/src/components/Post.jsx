import React, { Component } from 'react';

class Post extends Component {
  render () {
    const { post } = this.props;

    return (
      <div className="post">
        <p>A single post</p>
        <p>{post.content}</p>
      </div>
    )
  }
}

export default Post;