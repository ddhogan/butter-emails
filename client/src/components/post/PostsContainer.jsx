import React, { Component } from 'react';
import { connect } from 'react-redux';
import Posts from './Posts';
import PostInput from './PostInput';
import { deletePost, createPost, fetchPosts } from '../../actions/postActions';
import '../../css/PostsContainer.css';

class PostsContainer extends Component {
  componentDidMount = () => {
    this.props.fetchPosts();
  }
  
  render() {
    return (
      <div className="container">
        <PostInput createPost={this.props.createPost}/>
        <Posts posts={this.props.posts} deletePost={this.props.deletePost} />
      </div>
    )
  }
}

const mapStateToProps = state => ({ posts: state.posts });

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  createPost: post => dispatch(createPost(post)),
  deletePost: postId => dispatch(deletePost(postId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);