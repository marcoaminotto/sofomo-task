import React from 'react';

const ArrowButton = ({ direction, handleClick }) => {
  const buttonClasses =
    direction === 'right' ? 'right-direction' : 'left-direction';
  const imgDirection = 
    direction === 'right' ? 'img-right' : 'img-left';
  const arrowImg =
    direction === 'right' ? '/icons/right-arrow.svg' : '/icons/left-arrow.svg';
  const arrowDescription = 
    direction === 'right' ? 'next' : 'back';

  return (
    <div className={`button ${buttonClasses}`} onClick={handleClick}>
      <img
        className={imgDirection}
        src={arrowImg}
        alt={`${arrowDescription} advertising`}
      />
    </div>
  );
};

export default ArrowButton;
