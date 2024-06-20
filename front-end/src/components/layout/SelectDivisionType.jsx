import React from 'react';
import { useState } from 'react';

import ButtonSelectDivisionType from '../common/ButtonSelectDivisionType';

const SelectDivisionType = () => {
  const [selectButton, setSelectButton] = useState('divideEqual');

  function handleButtonClick(buttonName) {
    setSelectButton(buttonName);
  }

  return (
    <>
      <div className="flex justify-center items-center mt-3 gap-6 text-textColor">
        <ButtonSelectDivisionType
          text="Dividir igual"
          isSelected={selectButton === 'divideEqual'}
          onSelect={() => handleButtonClick('divideEqual')}
        />

        <ButtonSelectDivisionType
          text="Editar divisão"
          isSelected={selectButton === 'editDivision'}
          onSelect={() => handleButtonClick('editDivision')}
        />
      </div>
    </>
  );
};

export default SelectDivisionType;
