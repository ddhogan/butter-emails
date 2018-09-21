import React, { Component } from 'react';
import { connect } from 'react-redux';
import Posts from './Posts';
import PostInput from './PostInput';
import { deletePost, createPost } from '../../actions/postActions';

class PostsContainer extends Component {

  render() {
    return (
      <div>
        <PostInput createPost={this.props.createPost}/>
        <Posts posts={this.props.posts} deletePost={this.props.deletePost} />
      </div>
    )
  }
}

const mapStateToProps = state => ({ posts: state.posts });

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post)),
  deletePost: postId => dispatch(deletePost(postId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);