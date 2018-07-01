import { FETCH_USER } from '../constants/actionTypes';

const defaultState = {
  user: {},
  errors: {}
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case FETCH_USER + '_PENDING': {
      return {
        ...state,
        user: {}
      };
    }

    case FETCH_USER + '_FULFILLED': {
      const user = action.payload.data;
      return {
        ...state,
        user,
        errors: {}
      };
    }

    case FETCH_USER + '_REJECTED': {
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
