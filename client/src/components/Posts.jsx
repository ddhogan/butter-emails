import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  render() {
    const { posts } = this.props.posts;
    const postList = posts.map(post => {
      return (
        <Post 
          key={post.id}
          post={post}
        />
      )
    });

    return (
      <div>
        <p>All the posts</p>
        {postList}
      </div>
    );
  }
}

export default Posts;