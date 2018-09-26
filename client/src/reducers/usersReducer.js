import * as actionTypes from '../actions/actionTypes';


export default function usersReducer(state = {
  users: [],
  current_user: {},
}, action) {
  switch(action.type){
    
    case actionTypes.CREATE_USER:
      return { ...state, users: [...state.users, action.payload] }
    
    case actionTypes.LOGGING_IN:
      return { ...state, loading: true, current_user: ''};
    
    case actionTypes.LOGIN_USER:
      return { ...state, loading: false, current_user: action.payload };

    case actionTypes.LOGOUT_USER:
      return { ...state, current_user: '' }
    
    default:
      return state;
  }
}