import * as actionTypes from '../actions/actionTypes';

export default function postsReducer(state = {
  posts: [],
}, action) {
  switch(action.type){
    
    case actionTypes.CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] }
    
    case actionTypes.DELETE_POST:
      return { ...state, posts: state.posts.filter(post => post.id !== action.payload.id) }
    
    case actionTypes.LOADING_POSTS:
      return { ...state, loading: true, posts: [] };
    
    case actionTypes.FETCH_POSTS:
      return { ...state, loading: false, posts: action.payload };
    
    case actionTypes.EDIT_POST:
      return state.posts.map((post) => post.id === action.payload.id ? { ...post, editing: true} : post
    // first, change the posts editing state to true)
    // then re-render the page but replace the relevant post component with the postInput
    
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