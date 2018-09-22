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
      <p>Post #{props.post.id}: {props.post.content}  
      <button onClick={handleDeleteOnClick}>X </button>
      <button onClick={handleEditOnClick}>Edit </button></p>
      <small>By user ID: {props.post.user_id}</small>
    </div>
  )
}

export default Post;