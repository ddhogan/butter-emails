import * as actionTypes from '../actions/actionTypes';

export default function postsReducer(state = {
  posts: [],
  editing: false,
}, action) {
  switch(action.type){
    
    case actionTypes.LOADING_POSTS:
      return { ...state, loading: true, posts: [], }; 
    
    case actionTypes.FETCH_POSTS:
      return { ...state, loading: false, posts: action.payload, }; 
    
    case actionTypes.CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    
    case actionTypes.DELETE_POST:
      return { ...state, posts: state.posts.filter(post => post.id !== action.payload.id) }
        
    case actionTypes.UPDATE_POST:
      return state.posts.map((post) => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            content: action.payload.content,
          }
        } else return post;
      })
        
    default:
      return state;
  }
}