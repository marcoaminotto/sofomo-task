import React from 'react';

const Thumbnail = ({ path }) => {
  return (
    <div className="thumbnail">
      <img src={path} alt="Thumbnail" />
    </div>
  );
};

export default Thumbnail;
