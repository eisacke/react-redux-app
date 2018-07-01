import { client } from '../lib/client';
import { FETCH_ALBUM } from '../constants/actionTypes';
import { fetchPhotos, fetchUser } from './';

export function fetchAlbum(id) {
  return dispatch => {
    return dispatch({
      type: FETCH_ALBUM,
      payload: client.get('albums/' + id)
    });
  };
}

export function fetchAlbumPhotosAndUser(id) {
  return (dispatch, getState) => {
    return dispatch(fetchAlbum(id))
      .then(() => {
        return dispatch(fetchPhotos(50, id));
      })
      .then(() => {
        const fetchedAlbum = getState().albumsStore.album;
        return dispatch(fetchUser(fetchedAlbum.userId));
      });
  };
}
