import React, {Component}  from 'react';
import { connect } from 'react-redux';
import '../../css/Post.css';
import dateFormat from 'dateformat';

class Post extends Component {  
  
  handleDeleteOnClick = () => {
    this.props.deletePost(this.props.post.id)
  }
  handleEditOnClick = () => {
    this.props.editPost(this.props.post.id)
  }
  
  render() {
    return (
      <div className="post">
        <small>{this.props.post.user.username} writes: </small>
        <p>{this.props.post.content}  
        { this.props.auth.isAuthenticated ? 
          <React.Fragment>
            <button onClick={this.handleDeleteOnClick}>X </button>
            <button onClick={this.handleEditOnClick}>Edit </button>
          </React.Fragment>
        : null}
        </p>
        <small>{dateFormat(this.props.post.created_at)}, Post ID {this.props.post.id}</small>
      </div>
    )
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, null)(Post);