import React from 'react';

const PhotoTile = ({ thumbnailUrl }) => {
  return (
    <img src={thumbnailUrl} className="dim" />
  );
};

export default PhotoTile;
