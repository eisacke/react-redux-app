import React from 'react';
import PhotoTile from './PhotoTile';
import { Link } from 'react-router-dom';

class PhotosList extends React.Component {

  render() {
    const { photos } = this.props;

    return (
      <div className="cf nr2 nl2">
        {photos.map(photo =>
          <Link
            key={photo.id}
            to={'/photos/' + photo.id}
            className="fl w-third w-20-ns ph2 mb3"
          >
            <PhotoTile
              {...photo}
            />
          </Link>
        )}
      </div>
    );
  }
}

export default PhotosList;
