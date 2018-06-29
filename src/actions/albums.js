import { client } from '../lib/client';
import { FETCH_ALBUM } from '../constants/actionTypes';

export function fetchAlbum(id) {
  return dispatch => {
    return dispatch({
      type: FETCH_ALBUM,
      payload: client.get('albums/' + id)
    });
  };
}
