import React, {Component}  from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'; 
import '../../css/Post.css';
import dateFormat from 'dateformat';

class Post extends Component {

  handleDeleteOnClick = () => {
    this.props.deletePost(this.props.post.id)
  }
  // handleEditOnClick = () => {
  //   this.props.history.push('/edit');
  // }
  
  render() {
    return (
      <div className="post">
        <small>{this.props.post.user.username} writes: </small>
        <p>{this.props.post.content}</p>
        { this.props.auth.currentUser.id === this.props.post.user_id ? // you have to be logged in, and they have to be your posts, to see these buttons
          <div className="manage-post">
            <button onClick={this.handleDeleteOnClick}>X </button>
            <button><Link to={{pathname:`/edit/${this.props.post.id}`}}>Edit </Link></button>
          </div> : null}
        <small>{dateFormat(this.props.post.created_at)}, Post ID {this.props.post.id}</small>
      </div>
    )
  }
}

const mapStateToProps = state => ({ auth: state.auth, });

export default withRouter(connect(mapStateToProps, null)(Post));

// this.props.auth.isAuthenticated
// {post: {content: this.props.post.content, id: this.props.post.id}}