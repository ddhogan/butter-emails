import fetch from 'isomorphic-fetch';

export function createUser (username, password) {
  return (dispatch) => {
    return fetch('/signup', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(username, password),
    })
    .then(res => res.json())
    .then(data => dispatch({ type: "CREATE_USER", payload: data }))
  }
}

export function loginUser (username, password) {
  return (dispatch) => {
    dispatch({ type: "LOGGING_IN" });
    return fetch('/login', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(username, password),
    })
    .then(response => response.json())
    .then(data => dispatch({ type: "LOGIN_USER", payload: data }))
  };
};

export function logoutUser (user) {
  return(dispatch) => {
    return fetch('/logout', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(data => dispatch({ type: LOGOUT_USER, payload: data }))
  }
}