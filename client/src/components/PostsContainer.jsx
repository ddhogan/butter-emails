import React, { Component } from 'react';
import { connect } from 'react-redux';
import Posts from './Posts';
import PostInput from './PostInput';

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

// const mapStateToProps = state => ({ posts: state.posts });
const mapStateToProps = ({ posts }) => ({ posts })
const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch({ type: "CREATE_POST", post}),
  deletePost: id => dispatch({ type: "DELETE_POST", id }),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);