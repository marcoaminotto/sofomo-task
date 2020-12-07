import React from 'react';

import Advertise from '../Advertise';

const Image = ({src}) => {
  return (
    <div className="image">
      <Advertise />
      <img src={src} alt="Advertising" />
    </div>
  );
};

export default Image;
