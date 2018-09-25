import React from 'react';
import '../../css/Post.css';

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
      <p>Post #{props.post.id}: {props.post.content}  
      <button onClick={handleDeleteOnClick}>X </button>
      <button onClick={handleEditOnClick}>Edit </button></p>
    </div>
  )
}

export default Post;