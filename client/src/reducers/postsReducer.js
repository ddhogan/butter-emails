export default function postsReducer(state ={
  posts: [],
}, action) {
  switch(action.type){
    case "FETCH_POSTS":
      return state.posts
    case "CREATE_POST":
      return state.concat(action.payload)
    default:
      return state;
  };
}