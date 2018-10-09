import React, {Component}  from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'; 
import '../../css/Post.css';
import dateFormat from 'dateformat';
import LikeButton from './LikeButton';

class Post extends Component {

  handleDeleteOnClick = () => {
    this.props.deletePost(this.props.post.id)
  }
  
  render() {
    return (
      <div className="post">
        <small>{this.props.post.user.username} writes: </small>
        <p>{this.props.post.content}</p>

        { this.props.auth.currentUser.id === this.props.post.user_id ? 
        // Requires user to be logged in, and they have to be your posts, to see these buttons
          
          <div className="manage-post">
            <button onClick={this.handleDeleteOnClick}>X </button>
            <button><Link to={{pathname:`/edit/${this.props.post.id}`}}>Edit </Link></button>
          </div> : null}

        <small>{dateFormat(this.props.post.created_at)}, Post ID {this.props.post.id}</small>
        <LikeButton />
      </div>
    )
  }
}

const mapStateToProps = state => ({ auth: state.auth, });

export default withRouter(connect(mapStateToProps, null)(Post));