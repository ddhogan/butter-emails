import React, { Component } from 'react';

class LikeButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: 0,
    }
  }

  handleOnClick = (event) => {
    event.preventDefault();
    this.setState({ likes: this.state.likes + 1 });
  }

  render () {
    return (
      <div className="likeButton">
        <button onClick={this.handleOnClick}>Like!</button>
        <p>Liked {this.state.likes} times!</p>
      </div>
    )
  }
}

export default LikeButton;