export default function usersReducer(state = {
  users: [],
}, action) {
  switch(action.type){
    
    case "CREATE_USER":
      return { ...state, users: [...state.users, action.payload] }
    
    case "LOGGING_IN":
      return { loading: true, current_user: ''};
    
    case "LOGIN_USER":
      return { loading: false, current_user: action.payload };

    case "LOGOUT_USER":
      return { current_user: '' }
    
    default:
      return state;
  }
}