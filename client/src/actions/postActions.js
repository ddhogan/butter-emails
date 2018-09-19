import fetch from 'isomorphic-fetch';

export function fetchPosts () {
  return (dispatch) => {
    dispatch({ type: "LOADING_POSTS" });
    return fetch('/posts')
      .then(response => response.json())
      .then(posts => dispatch({ type: "FETCH_POSTS", payload: posts }));
  };
};