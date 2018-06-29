import { client } from '../lib/client';
import { FETCH_USER } from '../constants/actionTypes';

export function fetchUser(id) {
  return dispatch => {
    return dispatch({
      type: FETCH_USER,
      payload: client.get('users/' + id)
    });
  };
}
