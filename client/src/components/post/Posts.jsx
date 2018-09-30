import React from 'react';
import Post from './Post';
import '../../css/Posts.css';

const Posts = (props) => {
  const postList = props.posts.posts.map(post =>{
    return (
      <div key={post.id}>
        { <Post
            key={post.id}
            post={post}
            deletePost={props.deletePost} />
        }
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