import React, { Component } from 'react';
import Post from './Post';
import '../../css/Posts.css';

class Posts extends Component {

  render() {
    const { posts } = this.props.posts;
    const postList = posts.map(post =>{
      return (
        <Post 
        key={post.id}
        post={post}
        deletePost={this.props.deletePost}
        editPost={this.props.editPost} />
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