import { FETCH_PHOTOS, FETCH_PHOTO, SET_PHOTOS_CURRENT_PAGE } from '../constants/actionTypes';

const defaultState = {
  photos: [],
  photo: {},
  errors: {},
  page: 1
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case FETCH_PHOTOS + '_FULFILLED': {
      return {
        ...state,
        photos: action.payload.data,
        errors: {}
      };
    }

    case FETCH_PHOTOS + '_PENDING': {
      return {
        ...state,
        photos: []
      };
    }

    case FETCH_PHOTOS + '_REJECTED': {
      const { status, statusText } = action.payload.response;
      return {
        ...state,
        errors: { status, statusText }
      };
    }

    case SET_PHOTOS_CURRENT_PAGE: {
      return {
        ...state,
        page: action.payload
      };
    }

    case FETCH_PHOTO + '_PENDING': {
      return {
        ...state,
        photo: {},
        photos: []
      };
    }

    case FETCH_PHOTO + '_FULFILLED': {
      const photo = action.payload.data;
      return {
        ...state,
        photo,
        errors: {}
      };
    }

    case FETCH_PHOTO + '_REJECTED': {
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
