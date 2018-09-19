export default function postsReducer(state = {
  posts: [],
}, action) {
  switch(action.type){
    
    case "FETCH_POSTS":
      return state.posts
    
    case "CREATE_POST":
      const post = {
        id: Math.floor(Math.random()*1000),
        content: action.content
      }
      // return { posts: state.posts.concat(post) }
      return { ...state, posts: [...state.posts, post] }
    
    case "DELETE_POST":
      return { posts: state.posts.filter(post => post.id !== action.id) }
    
    case "LOADING_POSTS":
      return { loading: true, posts: [] };
    
     case "FETCH_POSTS":
      return { loading: false, posts: action.payload };
    
    default:
      return state;
  };
}