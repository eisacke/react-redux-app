import { FETCH_ALBUM } from '../constants/actionTypes';

const defaultState = {
  albums: [],
  album: {},
  loading: false,
  errors: {}
};

// TODO: errors - check the format they come back in from API

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    // case FETCH_ALBUMS + '_FULFILLED': {
    //   return {
    //     ...state,
    //     albums: action.payload.data,
    //     loading: false,
    //     errors: {}
    //   };
    // }
    //
    // case FETCH_ALBUMS + '_PENDING': {
    //   return {
    //     ...state,
    //     loading: true,
    //     errors: {}
    //   };
    // }
    //
    // case FETCH_PHOTOS + '_REJECTED': {
    //   const data = action.payload.response.data;
    //   return {
    //     ...state,
    //     loading: false,
    //     errors: { global: data.message }
    //   };
    // }

    case FETCH_ALBUM + '_PENDING': {
      return {
        ...state,
        loading: true,
        album: {}
      };
    }

    case FETCH_ALBUM + '_FULFILLED': {
      const album = action.payload.data;
      return {
        ...state,
        album,
        errors: {},
        loading: false
      };
    }

    case FETCH_ALBUM + '_REJECTED': {
      const data = action.payload.response.data;
      return {
        ...state,
        loading: false,
        errors: { global: data.message }
      };
    }

    default:
      return state;
  }
};
