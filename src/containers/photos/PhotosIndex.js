import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhotosList from '../../components/photos/PhotosList';

import { fetchPhotos } from '../../actions';

class PhotosIndex extends Component {
  componentDidMount = () => {
    this.props.fetchPhotos();
  }

  render() {
    const { photos, loading, errors } = this.props;
    return (

      <div>
        {errors.global &&<div>Error! {errors.global}</div>}

        {loading && <div>Loading...</div>}

        <PhotosList photos={photos} loading={loading} errors={errors} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { loading, photos, errors } = state.photosStore;
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
