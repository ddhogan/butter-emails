export default function postsReducer(state = {
  posts: [],
}, action) {
  switch(action.type){
    
    case "CREATE_POST":
      // const post = {
        // id: Math.floor(Math.random()*1000),
        // content: action.content
      // }
      return { ...state, posts: [...state.posts, action.payload] }
    
    case "DELETE_POST":
      return { posts: state.posts.filter(post => post.id !== action.payload.id) }
    
    case "LOADING_POSTS":
      return { loading: true, posts: [] };
    
    case "FETCH_POSTS":
      return { loading: false, posts: action.payload };
    
    case "EDIT_POST":
      return { posts: state.posts.map((post) => {
        if (post.id === action.payload.id) {
          return {
            ...post, content: action.payload.content
          }
        }
      }) };
    
    default:
      return state;
  }
}