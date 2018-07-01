import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchAlbumPhotosAndUser } from '../../actions';
import BackButton from '../../components/common/BackButton';
import Loading from '../../components/common/Loading';
import Error from '../../components/common/Error';
import PhotosList from '../../components/photos/PhotosList';

class AlbumsShow extends Component {
  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.props.fetchAlbumPhotosAndUser(id);
  }

  render() {
    const { album, photos, loading, errors, user } = this.props;

    if (loading) {
      return <Loading />;
    }

    if (errors.status && errors.statusText) {
      return <Error errors={errors} />;
    }

    return (
      <Fragment>
        <BackButton history={this.props.history} />
        <h2 className="f3 mt3 mb2">{album.title}</h2>
        <h3 className="f4 fw3 mt0 mb3">By {user.name}</h3>
        <PhotosList
          photos={photos}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { photos, errors } = state.photosStore;
  const { album } = state.albumsStore;
  const { user } = state.usersStore;
  const { loading } = state.loadingStore;
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
    fetchAlbumPhotosAndUser
  }
)(AlbumsShow);
