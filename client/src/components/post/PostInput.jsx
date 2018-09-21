import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/postActions';
import { bindActionCreators } from 'redux';
import {Button, Icon} from 'react-materialize';
import '../../css/PostInput.css';

class PostInput extends Component {
  constructor() {
    super();
    this.state = { content: '',};
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.createPost(this.state);
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
          <Button waves='light' type="submit">
            <Icon>send</Icon>
          </Button>
          {/* <input type="submit" /> */}
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