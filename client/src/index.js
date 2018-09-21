import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer,
  compose(applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, 
document.getElementById('root'));
registerServiceWorker();

//  Might want to follow this pattern instead, and take the routes out of App.js, and convert it's header stuff into a Navbar
  // <Router>
  //   <React.Fragment>
  //     <Navbar />
  //     <Route exact path="/" component={Home} />
  //     <Route exact path="/about" component={About} />
  //     <Route exact path="/login" component={Login} />
  //   </React.Fragment>
  // </Router>),