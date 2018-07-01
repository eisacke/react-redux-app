import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PhotoDetails from '../../components/photos/PhotoDetails';
import BackButton from '../../components/common/BackButton';
import Loading from '../../components/common/Loading';
import ErrorMessage from '../../components/common/ErrorMessage';
import AlbumPreview from '../../components/albums/AlbumPreview';
import { fetchPhotoUserAlbumAndRelatedPhotos } from '../../actions';

class PhotosShow extends Component {
  state = {
    id: ''
  }

  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.setState({ id });
    this.props.fetchPhotoUserAlbumAndRelatedPhotos(id);
  }

  componentWillReceiveProps = (nextProps) => {
    const currentId = this.state.id;
    const nextId = nextProps.match.params.id;

    if (currentId && currentId !== nextId) {
      this.setState({ id: nextId });
      this.props.fetchPhotoUserAlbumAndRelatedPhotos(nextId);
    }
  }

  render() {
    const { photo, photos, user, album, loading, errors, history } = this.props;

    if (loading) {
      return <Loading />;
    }

    if (errors.status && errors.statusText) {
      return <ErrorMessage errors={errors} />;
    }

    return (
      <Fragment>
        <BackButton history={history} />
        <PhotoDetails photo={photo} album={album} user={user}/>
        <AlbumPreview album={album} photos={photos} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { photo, photos, errors } = state.photosStore;
  const { album } = state.albumsStore;
  const { user } = state.usersStore;
  const { loading } = state.loadingStore;
  return {
    loading,
    photo,
    photos,
    errors,
    album,
    user
  };
};

export default connect(
  mapStateToProps, {
    fetchPhotoUserAlbumAndRelatedPhotos
  }
)(PhotosShow);
