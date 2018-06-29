import { FETCH_PHOTOS, FETCH_PHOTO } from '../constants/actionTypes';

const defaultState = {
  photos: [],
  photo: {},
  loading: false,
  errors: {}
};

// TODO: errors - check the format they come back in from API

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case FETCH_PHOTOS + '_FULFILLED': {
      return {
        ...state,
        photos: action.payload.data,
        loading: false,
        errors: {}
      };
    }

    case FETCH_PHOTOS + '_PENDING': {
      return {
        ...state,
        loading: true,
        errors: {}
      };
    }

    case FETCH_PHOTOS + '_REJECTED': {
      const data = action.payload.response.data;
      return {
        ...state,
        loading: false,
        errors: { global: data.message }
      };
    }

    case FETCH_PHOTO + '_PENDING': {
      return {
        ...state,
        loading: true,
        photo: {}
      };
    }

    case FETCH_PHOTO + '_FULFILLED': {
      const photo = action.payload.data;
      return {
        ...state,
        photo,
        errors: {},
        loading: false
      };
    }

    case FETCH_PHOTO + '_REJECTED': {
      const { status, statusText } = action.payload.response;
      return {
        ...state,
        loading: false,
        errors: { status, statusText }
      };
    }

    default:
      return state;
  }
};
