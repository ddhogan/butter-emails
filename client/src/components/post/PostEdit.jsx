import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePost } from '../../actions/postActions'
import '../../css/PostInput.css';

class PostEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: this.props.content,
      id: props.match.params,
      // editing: true
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.updatePost(this.state);
  }

  render () {
    // console.log("this got hit!")
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

export default connect(mapStateToProps, {updatePost})(PostEdit);