import React, { Component, Fragment } from 'react';
import PhotoTile from './PhotoTile';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

class PhotosList extends Component {

  changePage = (increment) => {
    const { page } = this.props;
    this.props.fetchPhotos(50, page + increment);
  }

  renderPagination = () => {
    const { page } = this.props;

    return (
      <div className="flex justify-between items-center">
        <div className="w-third">
          {page !== 1 && <Button onClick={() => this.changePage(-1)}><i className="fas fa-arrow-left"></i> Previous</Button>}
        </div>
        {/* TODO: remove magic numbers, 50 per page and 100 pages */}
        <span className="w-third tc mono">{page}/50</span>
        <div className="w-third flex justify-end">
          {page !== 100 && <Button onClick={() => this.changePage(1)}>Next <i className="fas fa-arrow-right"></i></Button>}
        </div>
      </div>
    );
  }

  render() {
    const { photos, fetchPhotos } = this.props;

    return (
      <Fragment>
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
        {fetchPhotos && this.renderPagination()}
      </Fragment>
    );
  }
}

export default PhotosList;
