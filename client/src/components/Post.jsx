import React, { Component } from 'react';
// import React from 'react';

class Post extends Component {
  
  handleOnClick = () => {
    this.props.deletePost(this.props.post.id)
  }
  
  render () {
    return (
      <div className="post">
        <p>Post #{this.props.post.id}: {this.props.post.content}</p>
        <button onClick={this.handleOnClick}>X </button>
      </div>
    )
  }
}

// const Post = props => {
//   return (
//     <div className="post">
//       <p>Post #{props.post.id}: {props.post.content}</p>
//       <button onClick={props.deletePost}>X </button>
//     </div>
//   )
// }

export default Post;