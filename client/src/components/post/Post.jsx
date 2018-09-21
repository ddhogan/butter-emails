import React, { Component } from 'react';
import '../../css/Post.css';

class Post extends Component {
  
  handleDeleteOnClick = () => {
    this.props.deletePost(this.props.post.id)
  }
  handleEditOnClick = () => {
    this.props.editPost(this.props.post.id)
  }
  
  render () {
    return (
      <div className="post">
        <p>Post #{this.props.post.id}: {this.props.post.content}  
        <button onClick={this.handleDeleteOnClick}>X </button>
        <button onClick={this.handleEditOnClick}>Edit </button></p>
      </div>
    )
  }
}

export default Post;