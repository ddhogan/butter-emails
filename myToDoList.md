# To do list

* [X] ~~*finish enabling edit/update for posts*~~ **donezo!!**
* [ ] log in message is always the same, even if didn't actually log in


### Need 2 container components
1. SignUp [stateful]
2. LogIn [stateful]
3. PostInput [stateful]
4. PostEdit [stateful]
5. PostsContainer

### Need 5 stateless components
1. Header [const]
2. About [const]
3. Posts [const]
4. App [const]
5. Post [class]
6. Navbar [class]


## Other thoughts, later ideas:

* may need to extract the edit/delete buttons from the Post component so it can be in charge of deciding whether or not they can be seen, and it would allow Post to go back to being `const`
* consider trying to move the form from login & signup into its own component
* consider trying to move the form from PostInput & PostEdit into its own component
* display more useful error messages for login/signup
* OAuth (maybe twitter?)
* Maybe [OpenID](https://openid.net/connect/), because OAuth is [annoying](https://oauth.net/articles/authentication/).