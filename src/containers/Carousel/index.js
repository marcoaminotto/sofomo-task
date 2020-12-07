import React, { useState } from 'react';

import Image from '../../components/Image';

const Carousel = () => {
  const [imagesList, setImagesList] = useState([1, 2, 3, 4]);

  return (
    <div id="carousel">
      <div id="slider">
        {imagesList.map((index) => {
          const imagePath = `/images/image${index}.jpg`;
          return <Image key={index} src={imagePath} />;
        })}
      </div>
      {/*
      <Filmtrip />
      <ArrowButton /> right
      <ArrowButton /> left */}
    </div>
  );
};

export default Carousel;
