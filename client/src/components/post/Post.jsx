import React, { Component } from 'react';
import {Button, Icon} from 'react-materialize';

class Post extends Component {
  
  handleOnClick = () => {
    this.props.deletePost(this.props.post.id)
  }
  
  render () {
    return (
      <div className="post">
        <p>Post #{this.props.post.id}: {this.props.post.content}
        {/* <button onClick={this.handleOnClick}>X </button> */}
           <Button onClick={this.handleOnClick}><Icon>delete_forever</Icon></Button></p>
      </div>
    )
  }
}

export default Post;