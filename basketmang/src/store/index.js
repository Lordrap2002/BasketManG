import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middlewares = [ thunk ];
const composeEnhancers = composeWithDevTools(
    applyMiddleware(...middlewares)
);

const store = createStore(rootReducer, composeEnhancers);

export default store;