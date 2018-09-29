import * as actionTypes from '../actions/actionTypes';

export default function postsReducer(state = {
  posts: [],
}, action) {
  switch(action.type){
    
    case actionTypes.LOADING_POSTS:
      return { ...state, loading: true, posts: [] }; //maybe an editing status needs to be introduced here?
    
    case actionTypes.FETCH_POSTS:
      return { ...state, loading: false, posts: action.payload };
    
    case actionTypes.CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] }
    
    case actionTypes.DELETE_POST:
      return { ...state, posts: state.posts.filter(post => post.id !== action.payload.id) }
    

    case actionTypes.EDIT_POST:
      return state.posts.map((post) => {
        if (post.id === action.payload.id) {
          return { ...post, editing: true,} 
        }
         else return { ...post, editing: false, }
        }
      )
        
    case actionTypes.UPDATE_POST:
      return state.posts.map((post) => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            content: action.payload.content,
            editing: false,
          }
        } else return post;
      })
        
    default:
      return state;
  }
}