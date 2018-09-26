import fetch from 'isomorphic-fetch';
import { API_URL } from './apiUrl'
import * as actionTypes from './actionTypes'

const authRequest = () => {
  return {
    type: actionTypes.AUTHENTICATION_REQUEST
  }
}

const authSuccess = (user, token) => {
  return {
    type: actionTypes.AUTHENTICATION_SUCCESS,
    user: user,
    token: token
  }
}

const authFailure = (errors) => {
  return {
    type: actionTypes.AUTHENTICATION_FAILURE,
    errors: errors
  }
}