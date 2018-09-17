import React, { Component } from 'react';

class Post extends Component {
  
  handleOnClick = () => {
    this.props.deletePost(this.props.id)
  }
  
  render () {
    const { post } = this.props;

    return (
      <div className="post">
        <p>{post.content}</p>
        <button onClick={this.handleOnClick}>X </button>
      </div>
    )
  }
}

export default Post;