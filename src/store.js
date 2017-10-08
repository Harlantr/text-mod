import { createStore, applyMiddleware, compose } from "redux";
import freeze from "redux-freeze";
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// add the middlewares
let middlewares = [
  thunk
];

// add the freeze dev middleware
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(freeze);
}

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

// create the store
const store = createStore(
  rootReducer,
  middleware
);

// export
export { store };
