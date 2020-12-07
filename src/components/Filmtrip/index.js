import React from 'react';

import Thumbnail from '../Thumbnail';

const Filmtrip = ({ images }) => {
  return (
    <div className="filmtrip">
      {images.map((index) => {
        const imagePath = `/images/image${index}.jpg`;
        return <Thumbnail key={index} path={imagePath} />;
      })}
    </div>
  );
};

export default Filmtrip;
