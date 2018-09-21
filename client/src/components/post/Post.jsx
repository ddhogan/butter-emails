import React, { Component } from 'react';
import '../../css/Post.css';

class Post extends Component {
  
  handleOnClick = () => {
    this.props.deletePost(this.props.post.id)
  }
  
  render () {
    return (
      <div className="post">
        <p>Post #{this.props.post.id}: {this.props.post.content}  <button onClick={this.handleOnClick}>X </button></p>
      </div>
    )
  }
}

export default Post;