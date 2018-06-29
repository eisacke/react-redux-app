import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAlbum, fetchPhotos, fetchUser } from '../../actions';

class AlbumsShow extends Component {
  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.props.fetchAlbum(id);
  }

  render() {
    const { album, loading, errors } = this.props;

    if (errors.status && errors.statusText) {
      return <h1>Error: {errors.status} {errors.statusText}</h1>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!album) return false;

    return (
      <div>
        <h1>{album.title}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { loading, photos, errors } = state.photosStore;
  const { album } = state.albumsStore;
  const { user } = state.usersStore;
  return {
    loading,
    photos,
    errors,
    album,
    user
  };
};

export default connect(
  mapStateToProps, {
    fetchUser,
    fetchAlbum,
    fetchPhotos
  }
)(AlbumsShow);
