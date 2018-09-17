export default function postsReducer(state ={
  posts: [],
}, action) {
  switch(action.type){
    case "FETCH_POSTS":
      return state.posts
    case "CREATE_POST":
      const post = {
        content: action.payload.text
      }
      return { posts: state.posts.concat(post) };
    case "DELETE_POST":
      return { posts: state.posts.filter(post => post.id !== action.id)}
    default:
      return state;
  };
}