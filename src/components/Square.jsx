import React from 'react';

const Square = (props) => {
  return (
    <div onClick={props.onClick} className='size-items'>
      <h1>{props.value}</h1>
    </div>
  );
};

export default Square;
