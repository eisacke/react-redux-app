import { combineReducers } from 'redux';
import albumsReducer from './albumsReducer';
import photosReducer from './photosReducer';
import usersReducer from './usersReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
  albumsStore: albumsReducer,
  photosStore: photosReducer,
  usersStore: usersReducer,
  loadingStore: loadingReducer
});

export default rootReducer;
