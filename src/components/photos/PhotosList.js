import React from 'react';
import PhotoTile from './PhotoTile';
import { Link } from 'react-router-dom';

class PhotosList extends React.Component {

  render() {
    const { photos } = this.props;

    return (
      <div className="row">
        <h1>Photo List</h1>
        <div className="photos-list">
          {photos.map(photo =>
            <Link
              key={photo.id}
              to={'/photos/' + photo.id}
              className="photos-list__link"
            >
              <PhotoTile
                {...photo}
              />
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default PhotosList;
