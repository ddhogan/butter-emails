import React from 'react';
import '../../css/Post.css';
import dateFormat from 'dateformat';

const Post = (props) => {  
  
  const handleDeleteOnClick = () => {
    props.deletePost(props.post.id)
  }
  const handleEditOnClick = () => {
    props.editPost(props.post.id)
  }
  
  return (
    <div className="post">
      <small>{props.post.user.username} writes: </small>
      <p>{props.post.content}  
      { props.isAuthenticated ? 
        <React.Fragment>
          <button onClick={handleDeleteOnClick}>X </button>
          <button onClick={handleEditOnClick}>Edit </button>
          </React.Fragment>
       : null}
       </p>
      <small>{dateFormat(props.post.created_at)}, Post ID {props.post.id}</small>
    </div>
  )
}

export default Post;