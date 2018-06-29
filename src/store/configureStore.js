import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import promise from 'redux-promise-middleware';

const middleware = applyMiddleware(promise(), thunk);

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    middleware
  );
}
