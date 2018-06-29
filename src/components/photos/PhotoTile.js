import React from 'react';

const PhotoTile = ({ title, thumbnailUrl }) => {
  return (
    <div>
      <img src={thumbnailUrl} />
      <p>{title}</p>
    </div>
  );
};

export default PhotoTile;
