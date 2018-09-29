import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/postActions';
import { bindActionCreators } from 'redux';
import '../../css/PostInput.css';

class PostInput extends Component {
  constructor() {
    super();
    this.state = { 
      content: '',
      editing: false,
    };
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.createPost(this.state.content, this.props.currentUser.id);
    this.setState({ content: '', });
  }

  render () {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Create Post: </label>
          <input 
            required
            type="text"
            name="content"
            placeholder="What's happening?"
            value={this.state.content}
            onChange={(event) => this.handleChange(event)} 
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch)}
}
const mapStateToProps = (state) => {
  return { posts: state.posts.posts, currentUser: state.auth.currentUser }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostInput);