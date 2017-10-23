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

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) :
  compose;

const enhancer = composeEnhancers(
applyMiddleware(...middlewares),
// other store enhancers if any
);
const store = createStore(
  rootReducer,
  enhancer
);

// export
export { store };
