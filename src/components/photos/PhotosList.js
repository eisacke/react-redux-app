import React, { Fragment } from 'react';
import PhotoTile from './PhotoTile';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const PhotosList = ({ photos, page, fetchPhotos }) => {

  const changePage = (increment) => {
    this.props.fetchPhotos(50, page + increment);
  };

  const renderPagination = () => {
    return (
      <div className="flex justify-between items-center">
        <div className="w-third">
          {page !== 1 && <Button onClick={() => changePage(-1)}><i className="fas fa-arrow-left"></i> Previous</Button>}
        </div>
        {/* TODO: remove magic numbers, 50 per page and 100 pages */}
        <span className="w-third tc mono">{page}/50</span>
        <div className="w-third flex justify-end">
          {page !== 100 && <Button onClick={() => changePage(1)}>Next <i className="fas fa-arrow-right"></i></Button>}
        </div>
      </div>
    );
  };

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
      {fetchPhotos && renderPagination()}
    </Fragment>
  );
};

export default PhotosList;
