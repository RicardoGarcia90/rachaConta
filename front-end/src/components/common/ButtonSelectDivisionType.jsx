import React from 'react';
import { FaRegCircle } from 'react-icons/fa';
import { FaRegDotCircle } from 'react-icons/fa';

const ButtonSelectDivisionType = ({ text, isSelected, onSelect }) => {
  return (
    <>
      <div className="flex justify-center items-center gap-1">
        <button className="flex items-center gap-1" onClick={onSelect}>
          {isSelected ? <FaRegDotCircle /> : <FaRegCircle />}
          {text}
        </button>
      </div>
    </>
  );
};

export default ButtonSelectDivisionType;
