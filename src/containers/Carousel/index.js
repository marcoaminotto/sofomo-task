import React, { useState } from 'react';

import ArrowButton from '../../components/ArrowButton';
import Filmtrip from '../../components/Filmtrip';
import Image from '../../components/Image';

const Carousel = () => {
  const [imagesList, setImagesList] = useState([1, 2, 3, 4]);
  const [translate, setTranslate] = useState(0);
  const [transition, setTransition] = useState(0.45);
  const [activeImage, setActiveImage] = useState(0);

  const getWindowWidth = () => {
    return window.innerWidth;
  };

  const imagesTransition = {
    transform: `translateX(${translate}px)`,
    transition: `transform ease-out ${transition}s`,
    width: `${getWindowWidth() * imagesList.length}px`,
  };

  const nextImage = () => {
    if (activeImage * -1 === imagesList.length - 1) {
      setTranslate(0);
      setActiveImage(0);
      return;
    }

    setActiveImage(activeImage - 1);
    setTranslate((activeImage - 1) * getWindowWidth());
  };

  const prevImage = () => {
    if (activeImage === 0) {
      setTranslate((imagesList.length - 1) * getWindowWidth() * -1);
      setActiveImage((imagesList.length - 1) * -1);
      return;
    }

    setActiveImage(activeImage + 1);
    setTranslate((activeImage + 1) * getWindowWidth());
  };

  return (
    <div id="carousel">
      <div id="slider" style={imagesTransition}>
        {imagesList.map((index) => {
          const imagePath = `/images/image${index}.jpg`;
          return <Image key={index} src={imagePath} />;
        })}
      </div>
      <ArrowButton direction="left" handleClick={prevImage} />
      <ArrowButton direction="right" handleClick={nextImage} />
      <Filmtrip
        images={imagesList}
      />
    </div>
  );
};

export default Carousel;
