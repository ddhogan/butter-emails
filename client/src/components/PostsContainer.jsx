import React, { Component } from 'react';
import { connect } from 'react-redux';
import Posts from './Posts';
import PostInput from './PostInput';

class PostsContainer extends Component {
  render() {
    return (
      <div>
        <PostInput />
        <Posts posts={this.props.posts} />
      </div>
    )
  }
}

const mapStateToProps = state => ({ posts: state.posts });
const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch({ type: "DELETE_POST", id })
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);