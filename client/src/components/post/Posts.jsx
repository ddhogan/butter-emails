import React from 'react';
import Post from './Post';
import '../../css/Posts.css';

const Posts = (props) => {
  // const { posts } = props.posts;
  const postList = props.posts.posts.map(post =>{
    return (
      <Post 
      key={post.id}
      post={post}
      deletePost={props.deletePost}
      editPost={props.editPost} />
    )
  });

  return (
    <div className="postList">
      {postList}
    </div>
  );
}

export default Posts;