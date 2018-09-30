import fetch from 'isomorphic-fetch';
import * as actionTypes from './actionTypes'

export function fetchPosts () {
  return (dispatch) => {
    dispatch({ type: actionTypes.LOADING_POSTS });
    return fetch('/posts')
      .then(response => response.json())
      .then(posts => dispatch({ type: actionTypes.FETCH_POSTS, payload: posts }));
  };
};

export function createPost (content, user_id) {
  return (dispatch) => {
    return fetch('/posts', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content, user_id}),
    })
    .then(response => response.json())
    .then(data => dispatch({ type: actionTypes.CREATE_POST, payload: data }))
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
    .then(post => dispatch({ type: actionTypes.DELETE_POST, payload: post }))
  };
};

// export function editPost(postId) {
//   return (dispatch) => {
//     dispatch({ type: actionTypes.EDIT_POST, payload: postId });
//   };
// };

export function updatePost(postId, content) {
  return (dispatch) => {
    return fetch(`/posts/${postId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'post': {content: content} }),
    })
    .then(response => response.json())
    .then(post => dispatch({ type: actionTypes.UPDATE_POST, payload: post }))
  };
};