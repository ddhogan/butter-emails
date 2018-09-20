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
    .then(content => dispatch({ type: "CREATE_POST", payload: content }))
  };
};