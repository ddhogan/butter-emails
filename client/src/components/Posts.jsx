import React, { Component } from 'react';
// import React from 'react';
import Post from './Post';

class Posts extends Component {
  render() {
    const { posts } = this.props.posts;
    const postList = posts.map(post => {
      return (
        <Post 
          key={post.id}
          post={post}
          deletePost={this.props.deletePost}
        />
      )
    });

    return (
      <div>
        {postList}
      </div>
    );
  }
}

// const Posts = props => {
//   const postList = props.posts.map(post => <Post key={post.id} {...post} deletePost={props.deletePost} />)

//   return (
//     <div>
//       {postList}
//     </div>
//   );
// };

export default Posts;