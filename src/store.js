import { createStore, compose, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  typeof window == 'object' &&
  typeof window.devToolsExtention !== "undefined" ? window.devToolExtension() : f => f
));

export default store;