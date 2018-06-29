import { FETCH_USER } from '../constants/actionTypes';

const defaultState = {
  users: [],
  user: {},
  loading: false,
  errors: {}
};

// TODO: errors - check the format they come back in from API

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    // case FETCH_USERS + '_FULFILLED': {
    //   return {
    //     ...state,
    //     users: action.payload.data,
    //     loading: false,
    //     errors: {}
    //   };
    // }
    //
    // case FETCH_USERS + '_PENDING': {
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

    case FETCH_USER + '_PENDING': {
      return {
        ...state,
        loading: true,
        user: {}
      };
    }

    case FETCH_USER + '_FULFILLED': {
      const user = action.payload.data;
      return {
        ...state,
        user,
        errors: {},
        loading: false
      };
    }

    case FETCH_USER + '_REJECTED': {
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
