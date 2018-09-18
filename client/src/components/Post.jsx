// import React, { Component } from 'react';
import React from 'react';

// class Post extends Component {
  
//   render () {
//     const { post } = this.props;

//     return (
//       <div className="post">
//         <p>{post.content}</p>
//         <button onClick={this.props.handleOnClick}>X </button>
//       </div>
//     )
//   }
// }

const Post = props => {
  return (
    <div className="post">
      <p>{props.post.content}</p>
      <button onClick={props.handleOnClick}>X </button>
    </div>
  )
}

export default Post;