import fetch from 'isomorphic-fetch';

export function fetchPosts () {
  return (dispatch) => {
    dispatch({ type: "LOADING_POSTS" });
    return fetch('/posts')
      .then(response => response.json())
      .then(posts => dispatch({ type: "FETCH_POSTS", payload: posts }));
  };
};

export function createPost (post) {
  return (dispatch) => {
    return fetch('/posts', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
    .then(response => response.json())
    .then(data => dispatch({ type: "CREATE_POST", payload: data }))
  };
};

export function deletePost(postId) {
  return (dispatch) => {
    return fetch(`/posts/${postId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({'post': {id: postId}}),
    })
    .then(response => response.json())
    .then(post => dispatch({ type: "DELETE_POST", payload: post }))
  };
};

export function editPost(postId, newContent) {
  return (dispatch) => {
    const post = { 'post': {content: newContent, id: postId} }
    return fetch(`/posts/${postId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({post: post}),
    })
    .then(response => response.json())
    .then(post => dispatch({ type: "EDIT_POST", payload: (post)}))
  }
}