import React from 'react';
import Post from './Post';
import '../../css/Posts.css';
import PostInput from './PostInput';

const Posts = (props) => {
  const postList = props.posts.posts.map(post =>{
    return (
      <div key={post.id}>
        { post.editing ? <PostInput key={post.id} post={post} /> : 
          <Post
            key={post.id}
            post={post}
            deletePost={props.deletePost}
            editPost={props.editPost} /> }
      </div>
    )
  });

  return (
    <div className="postList">
      {postList}
    </div>
  );
}

export default Posts;