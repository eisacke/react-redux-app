import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhotosList from '../../components/photos/PhotosList';
import Loading from '../../components/common/Loading';
import ErrorMessage from '../../components/common/ErrorMessage';
import { fetchPhotos } from '../../actions';

class PhotosIndex extends Component {
  componentDidMount = () => {
    this.props.fetchPhotos();
  }

  render() {
    const { photos, page, loading, errors, fetchPhotos } = this.props;

    if (loading) {
      return <Loading />;
    }

    if (errors.status && errors.statusText) {
      return <ErrorMessage errors={errors} />;
    }

    return (
      <PhotosList
        photos={photos}
        fetchPhotos={fetchPhotos}
        page={page}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { photos, page, errors } = state.photosStore;
  const { loading } = state.loadingStore;
  return {
    loading,
    photos,
    page,
    errors
  };
};

export default connect(
  mapStateToProps, {
    fetchPhotos
  }
)(PhotosIndex);
