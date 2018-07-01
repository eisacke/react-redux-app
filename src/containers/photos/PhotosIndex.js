import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhotosList from '../../components/photos/PhotosList';
import Loading from '../../components/common/Loading';
import Error from '../../components/common/Error';
import { fetchPhotos } from '../../actions';

class PhotosIndex extends Component {
  componentDidMount = () => {
    this.props.fetchPhotos();
  }

  render() {
    const { photos, loading, errors } = this.props;
    if (loading) {
      return <Loading />;
    }

    if (errors.status && errors.statusText) {
      return <Error errors={errors} />;
    }

    return (
      <PhotosList photos={photos} loading={loading} errors={errors} />
    );
  }
}

const mapStateToProps = (state) => {
  const { photos, errors } = state.photosStore;
  const { loading } = state.loadingStore;
  return {
    loading,
    photos,
    errors
  };
};

export default connect(
  mapStateToProps, {
    fetchPhotos
  }
)(PhotosIndex);
