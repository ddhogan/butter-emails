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

export function deletePost (id) {
  return (dispatch) => {
    dispatch(removePost(id));
    return fetch(`/posts/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(id),
    })
    .then(response => response)
    // .then(data => dispatch({ type: "DELETE_POST", payload: data }))
  };
};

export function removePost (id) {
  return {
    type: 'DELETE_POST',
    id
  }
}