import { FETCH_ALBUM } from '../constants/actionTypes';

const defaultState = {
  album: {},
  errors: {}
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case FETCH_ALBUM + '_PENDING': {
      return {
        ...state,
        album: {}
      };
    }

    case FETCH_ALBUM + '_FULFILLED': {
      const album = action.payload.data;
      return {
        ...state,
        album,
        errors: {}
      };
    }

    case FETCH_ALBUM + '_REJECTED': {
      const { status, statusText } = action.payload.response;
      return {
        ...state,
        errors: { status, statusText }
      };
    }

    default:
      return state;
  }
};
