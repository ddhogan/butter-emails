import React, { Component } from 'react';

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
    this.props.createPost(this.state.content);
    this.setState({ content: '', });
  }

  render () {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Create Post: </label>
          <input 
            type="text"
            value={this.state.content}
            onChange={(event) => this.handleChange(event)} 
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default PostInput;