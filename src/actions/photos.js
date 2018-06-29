import { client } from '../lib/client';
import { FETCH_PHOTOS, FETCH_PHOTO } from '../constants/actionTypes';

export function fetchPhotos() {
  return dispatch => {
    return dispatch({
      type: FETCH_PHOTOS,
      payload: client.get('photos?_limit=50')
    });
  };
}

export function fetchPhoto(id) {
  return dispatch => {
    return dispatch({
      type: FETCH_PHOTO,
      payload: client.get('photos/' + id)
    });
  };
}
