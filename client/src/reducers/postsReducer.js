export default function postsReducer(state = {
  posts: [],
}, action) {
  switch(action.type){
    
    case "CREATE_POST":
      return { ...state, posts: [...state.posts, action.payload] }
    
    case "DELETE_POST":
      return { posts: state.posts.filter(post => post.id !== action.payload.id) }
    
    case "LOADING_POSTS":
      return { loading: true, posts: [] };
    
    case "FETCH_POSTS":
      return { loading: false, posts: action.payload };
    
    case "EDIT_POST":
      //   return { posts: state.posts.map((post) => {
      //     if (post.id === action.payload.id) {
      //       return {
      //         ...state, content: action.payload.content
      //       }
      //     }
      // }) };
      return state;
      // this method needs work.. maybe use find() instead of map, and then just change its content without changing its id?
    
    default:
      return state;
  }
}