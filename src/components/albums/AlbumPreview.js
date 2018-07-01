import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PhotosList from '../photos/PhotosList';

class AlbumPreview extends React.Component {
  render() {
    const { photos, album } = this.props;

    return (
      <Fragment>
        <div className="flex justify-between mb2">
          <h5 className="f5 fw3 mt0 mb0">More from this album</h5>
          <Link
            to={'/albums/' + album.id}
            className="mono ttu pointer bg-transparent pa0 bn fw3 outline-0 hover-brand no-underline"
          >
            View all <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
        <PhotosList photos={photos} />
      </Fragment>
    );
  }
}

export default AlbumPreview;
