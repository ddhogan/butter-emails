import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/postActions';
import { bindActionCreators } from 'redux';
import '../../css/PostInput.css';

class PostEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: this.props.content,
      id: this.props.id
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const newContent = this.content.value;
    // this.props.actions.editPost(this.state);
    this.props.dispatch({ type: "EDIT_POST", id: this.state.post.id, content: newContent })
  }

  render () {
    return (
      <div>
        <form>
          <label>Edit this post: </label>
          <input 
            type="text"
            name="content"
            value={this.state.content}
            onChange={(event) => this.handleChange(event)}
          />
          <input type="submit">Submit Edit</input>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts.posts.content }
}
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);