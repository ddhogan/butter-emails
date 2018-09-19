import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  
  render() {
    const { posts } = this.props.posts;
    const postList = posts.map(post =>{
      return (
        <div className="postList">
          <Post 
          key={post.id}
          post={post}
          deletePost={this.props.deletePost}
          />
        </div>
        
      )
    });

    return (
      <div>
        {postList}
      </div>
    );
  }
}

export default Posts;