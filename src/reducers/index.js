import { combineReducers } from 'redux';
import albumsReducer from './albumsReducer';
import photosReducer from './photosReducer';
import usersReducer from './usersReducer';

const padApp = combineReducers({
  albumsStore: albumsReducer,
  photosStore: photosReducer,
  usersStore: usersReducer
});

export default padApp;
