import React from 'react';

import Thumbnail from '../Thumbnail';

const Filmtrip = ({ images, activeImage, handleClick }) => {
  return (
    <div className="filmtrip">
      {images.map((index) => {
        const imagePath = `/images/image${index}.jpg`;
        return (
          <Thumbnail
            key={index}
            path={imagePath}
            active={index - 1 === activeImage * -1}
            index={index}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default Filmtrip;
