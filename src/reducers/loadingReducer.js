const defaultState = {
  loading: false
};

export default (state = defaultState, action = {}) => {
  const loading = action.type.includes('_PENDING');
  return {
    ...state,
    loading
  };
};
