import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
// import usersReducer from './usersReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  // users: usersReducer,
  auth: authReducer,
})

export default rootReducer;