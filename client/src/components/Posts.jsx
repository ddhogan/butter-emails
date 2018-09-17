import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch({ type: "DELETE_POST", id })
})
export default connect(null, mapDispatchToProps)(Posts);