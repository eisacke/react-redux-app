import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhotoDetails from '../../components/photos/PhotoDetails';
import { fetchPhoto, fetchAlbum, fetchUser } from '../../actions';

class PhotosShow extends Component {
  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.props.fetchPhoto(id)
      .then(res => {
        const { albumId } = res.value.data;
        return this.props.fetchAlbum(albumId);
      })
      .then(res => {
        const { userId } = res.value.data;
        return this.props.fetchUser(userId);
      })
      .catch(err => console.log(err));
  }

  render() {
    const { photo, user, album, loading, errors, history } = this.props;

    if (errors.status && errors.statusText) {
      return <h1>Error: {errors.status} {errors.statusText}</h1>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!photo) return false;

    return (
      <div>
        <PhotoDetails photo={photo} history={history}/>

        <h1>By: {user.name} from {album.title}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { loading, photo, errors } = state.photosStore;
  const { album } = state.albumsStore;
  const { user } = state.usersStore;
  return {
    loading,
    photo,
    errors,
    album,
    user
  };
};

export default connect(
  mapStateToProps, {
    fetchPhoto,
    fetchAlbum,
    fetchUser
  }
)(PhotosShow);
