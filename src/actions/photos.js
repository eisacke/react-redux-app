import { client } from '../lib/client';
import { FETCH_PHOTOS, FETCH_PHOTO } from '../constants/actionTypes';
import { fetchAlbum, fetchUser } from './';

export function fetchPhotos(limit=50, albumId) {
  return dispatch => {
    return dispatch({
      type: FETCH_PHOTOS,
      payload: client.get(`photos?_limit=${limit}${albumId ? '&albumId=' + albumId : ''}`)
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

export function fetchPhotoUserAlbumAndRelatedPhotos(id) {
  return (dispatch, getState) => {
    return dispatch(fetchPhoto(id))
      .then(() => {
        const fetchedPhoto = getState().photosStore.photo;
        return dispatch(fetchAlbum(fetchedPhoto.albumId));
      })
      .then(() => {
        const fetchedAlbum = getState().albumsStore.album;
        return dispatch(fetchUser(fetchedAlbum.userId));
      })
      .then(() => {
        const fetchedPhoto = getState().photosStore.photo;
        return dispatch(fetchPhotos(5, fetchedPhoto.albumId));
      });
  };
}
