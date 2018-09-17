import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostInput extends Component {
  constructor(props) {
    super(props);
    this.state = { content: '', };
  }

  handleChange(event) {
    this.setState({ content: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createPost(this.state);
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

const mapDispatchToProps = dispatch => ({
  createPost: formData => dispatch({ type: "CREATE_POST", payload: formData })
})

export default connect(null, mapDispatchToProps)(PostInput);