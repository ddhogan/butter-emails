import React, { Component } from 'react';
import { connect } from 'react-redux';
import Posts from './Posts';
import PostInput from './PostInput';

class PostsContainer extends Component {
  render() {
    return (
      <div>
        <p>this is the posts container</p>
        <PostInput createPost={this.props.createPost}/>
        <Posts posts={this.props.posts} />
      </div>
    )
  }
}

const mapStateToProps = state => ({ posts: state.posts });
const mapDispatchToProps = dispatch => ({
  createPost: content => dispatch({ type: "CREATE_POST", content }),
  deletePost: id => dispatch({ type: "DELETE_POST", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);