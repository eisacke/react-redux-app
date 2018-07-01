import React from 'react';

class PhotoDetails extends React.Component {
  render() {
    const { photo, album, user } = this.props;

    return (
      <div className="mt3 mb4">
        <div className="cf">
          <div className="fl w-100 w-50-ns pr0 pr2-ns mb3 mb0-ns">
            <img src={photo.url} />
          </div>
          <div className="fl w-100 w-50-ns pl0 pl2-ns">
            <div className="bg-white pa3">
              <h2 className="f3 mt0 mb2">{photo.title}</h2>
              <h3 className="f4 fw3 mt0 mb2">By {user.name}</h3>
              <h4 className="f5 fw3 mt0 mb0">Part of the <span className="i">{album.title}</span> album</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoDetails;
