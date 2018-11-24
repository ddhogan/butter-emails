import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createHistory from "history/createBrowserHistory" 
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f))

export const history = createHistory(); // lets us access history anywhere, including actions!!

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();