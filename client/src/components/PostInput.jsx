import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/postActions';
import { bindActionCreators } from 'redux';

class PostInput extends Component {
  constructor() {
    super();
    this.state = { content: '', id: 0};
  }

  handleChange(event) {
    this.setState({ content: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.createPost(this.state.content);
    this.setState({ content: '', });
  }

  render () {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Create Post: </label>
          <input 
            type="text"
            name="content"
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
  return { posts: state.posts.posts.content }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostInput);