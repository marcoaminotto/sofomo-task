import React from 'react';

const Image = ({src}) => {
  return (
    <div className="image">
      <img src={src} alt="Advertising" />
    </div>
  );
};

export default Image;
