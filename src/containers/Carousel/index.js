import React, { useState } from 'react';

import ArrowButton from '../../components/ArrowButton';
import Image from '../../components/Image';

const Carousel = () => {
  const [imagesList, setImagesList] = useState([1, 2, 3, 4]);

  const nextImage = () => {
  };

  const prevImage = () => {
  };

  return (
    <div id="carousel">
      <div id="slider">
        {imagesList.map((index) => {
          const imagePath = `/images/image${index}.jpg`;
          return <Image key={index} src={imagePath} />;
        })}
      </div>
      <ArrowButton direction="left" handleClick={prevImage} />
      <ArrowButton direction="right" handleClick={nextImage} />
      {/*
      <Filmtrip />
      <ArrowButton /> right
      <ArrowButton /> left */}
    </div>
  );
};

export default Carousel;
