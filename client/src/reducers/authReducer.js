import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  currentUser: {},
  token: null,
  errors: [],
}

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.AUTHENTICATION_REQUEST:
      return {
        ...state,
        isAuthenticating:true
      }
    case actionTypes.AUTHENTICATION_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isAuthenticating: false,
        currentUser: action.user,
        token: action.token
      }
    case actionTypes.AUTHENTICATION_FAILURE:
      return {
        isAuthenticated: false,
        isAuthenticating: false,
        currentUser: {},
        token: null,
        errors: action.errors || []
      }
    case actionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        isAuthenticating: false,
        currentUser: {},
        token: null
      }
    default:
      return state;
  }
}