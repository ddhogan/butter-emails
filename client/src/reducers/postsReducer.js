export default function postsReducer(state = {
  posts: [],
}, action) {
  switch(action.type){
    
    case "CREATE_POST":
      return { ...state, posts: [...state.posts, action.payload] }
    
    case "DELETE_POST":
      return { ...state, posts: state.posts.filter(post => post.id !== action.payload.id) }
    
    case "LOADING_POSTS":
      return { ...state, loading: true, posts: [] };
    
    case "FETCH_POSTS":
      return { ...state, loading: false, posts: action.payload };
    
    case "EDIT_POST":
    // this method needs work...
        return { ...state, posts: state.posts.map((post) => {
          if (post.id !== action.payload.id) {
            return post
          }
          return {...state, post: action.payload.content} 
        }) };
        
    default:
      return state;
  }
}