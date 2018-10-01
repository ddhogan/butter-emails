# butter-emails

## Overview
My React-Redux portfolio project for the Flatiron School.  Basically a Twitter clone, except you can also edit your posts!
This was built with a Rails API and React/Redux client, and employs the Knock gem for JWT authentication and bcrypt gem for securing passwords on the API side.

## Installation
1. Fork and clone this repository, and then within the root directory execute: `$ bundle install` and then `$ rake db:migrate`
2. It's more fun with some seed data to start with: `$ rake db:seed`
3. Then run: `$ rake start` which will use Foreman to launch both the API and client servers in the same terminal instance.
4. Open up a new web browser tab and navigate to `localhost:3000`
5. Enter `ctrl+C` in your terminal to shut it down.

### Contributors
Contributions are welcome, and can be made by either opening an issue or making a pull request to this repo.

### License
The full [MIT license](https://github.com/ddhogan/butter-emails/blob/master/LICENSE) can be found in this repo.

### Code of Conduct
This is currently under thoughtful development, and will evolve as the app does and can be found [here](https://github.com/ddhogan/butter-emails/blob/master/CODE_OF_CONDUCT.md) in this repo.