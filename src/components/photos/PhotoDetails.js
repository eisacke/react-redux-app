import React from 'react';
import PhotoTile from './PhotoTile';
import BackButton from '../common/BackButton';

class PhotoDetails extends React.Component {

  render() {
    const { photo } = this.props;

    return (
      <div>
        <BackButton history={this.props.history} />
        <h1>Photo Details</h1>
        <PhotoTile {...photo} />
      </div>
    );
  }
}

export default PhotoDetails;
