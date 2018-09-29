# To do list

* [ ] finish enabling **edit/update** for posts
* [ ] log in seems to... always work?
* [ ] display more useful error messages for login/signup
* [ ] form validations
* [ ] restrictions for editing/deleting only your own posts (the post.user_id must match the currentUser.userid)


## Other thoughts...

* [ ] OAuth (maybe twitter?)
* [ ] Maybe [OpenID](https://openid.net/connect/), because OAuth is [annoying](https://oauth.net/articles/authentication/).

Need 2 container components
### Declared with 'class':
1. SignUp
2. LogIn
3. Navbar
4. Post
5. PostInput
6. PostEdit
7. PostsContainer

5 stateless components
### Declared with 'const':
1. Header
2. About
3. Posts
4. App

* may need to extract the edit/delete buttons from the Post component so it can be in charge of deciding whether or not they can be seen, and it would allow Post to go back to being stateless/functional
* consider trying to move the form from login & signup into its own component
* consider trying to move the form from PostInput & PostEdit into its own component
