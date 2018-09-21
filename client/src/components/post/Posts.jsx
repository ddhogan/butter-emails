import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {

  render() {
    const { posts } = this.props.posts;
    const postList = posts.map(post =>{
      return (
        <Post 
        key={post.id}
        post={post}
        deletePost={this.props.deletePost} />
      )
    });

    return (
      <div className="postList">
        {postList}
      </div>
    );
  }
}

export default Posts;