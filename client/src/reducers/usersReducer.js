export default function usersReducer(state = {
  users: [],
  current_user: {},
}, action) {
  switch(action.type){
    
    case "CREATE_USER":
      return { ...state, users: [...state.users, action.payload] }
    
    case "LOGGING_IN":
      return { ...state, loading: true, current_user: ''};
    
    case "LOGIN_USER":
      return { ...state, loading: false, current_user: action.payload };

    case "LOGOUT_USER":
      return { ...state, current_user: '' }
    
    default:
      return state;
  }
}