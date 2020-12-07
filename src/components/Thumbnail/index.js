import React from 'react';

const Thumbnail = ({ path, active, handleClick, index }) => {
  return (
    <div className="thumbnail" onClick={() => handleClick(index)}>
      <img
        className={active ? 'active' : undefined}
        src={path}
        alt="Thumbnail"
      />
    </div>
  );
};

export default Thumbnail;
