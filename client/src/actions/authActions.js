import fetch from 'isomorphic-fetch';
import { API_URL } from './apiURL'
import * as actionTypes from './actionTypes'
import { history } from '../index';

export const authRequest = () => {
  return {
    type: actionTypes.AUTHENTICATION_REQUEST
  }
}

export const authSuccess = (user, token) => {
  window.alert("You are logged in!");
  history.push('/');
  return {
    type: actionTypes.AUTHENTICATION_SUCCESS,
    user: user,
    token: token
  }
}

export const authFailure = (errors) => {
  window.alert("Sorry, something went wrong, please try again.");
  return {
    type: actionTypes.AUTHENTICATION_FAILURE,
    errors: errors
  }
}

export const signup = (user) => {
  const newUser = user
  return dispatch => {
    return fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json', },
      body: JSON.stringify({ user: user })
      })
      .then(response => response.json())
      .then(jresp => {
        dispatch(authenticate({
          username: newUser.username,
          email: newUser.email,
          password: newUser.password })
        );
      })
      .catch((errors) => {
        dispatch(authFailure(errors))
      })
  };
}

export const authenticate = (credentials) => {
  return dispatch => {
    dispatch(authRequest())

    return fetch(`${API_URL}/user_token`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({auth: credentials})
    })
    .then(res => res.json())
    .then((response) => {
      const token = response.jwt;
      localStorage.setItem('token', token);
      return getUser(credentials)
    })
    .then((user) => {
      console.log(user)
      dispatch(authSuccess(user, localStorage.token))
    })
    .catch((errors) => {
      console.log(errors)
      dispatch(authFailure(errors))
      localStorage.clear()
    })
  }
}

export const getUser = (credentials) => {
  const request = new Request(`${API_URL}/find_user`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.token}`,
    }),
    body: JSON.stringify({ user: credentials })
  })
  return fetch(request)
    .then(response => response.json())
    .then(userJson => { return userJson })
    .catch(error => { return error });
}

export const logout = () => {
  return dispatch => {
    localStorage.clear();
    window.alert("You have logged out");
    return dispatch({
      type: actionTypes.LOGOUT
    });
  }
}