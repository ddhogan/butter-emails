import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updatePost } from '../../actions/postActions'
import '../../css/PostInput.css';

class PostEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: this.props.content,
      postId: this.props.match.params.postId,
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.updatePost(this.props.match.params.id, this.state.content);
    // this.props.updatePost(8, this.state.content); // confirmed that it works with hardcoded ID...
    this.props.history.push('/')
  }

  render () {
    // console.log(this.props.match.params.id)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Edit this post: </label>
          <input 
            type="text"
            name="content"
            value={this.props.content}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts.posts }
}

const mapDispatchToProps = dispatch => ({
  updatePost: (postId, content) => dispatch(updatePost(postId, content))
})

export default PostEdit = withRouter(connect(mapStateToProps, mapDispatchToProps)(PostEdit));