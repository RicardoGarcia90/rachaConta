import React, { useEffect, useState } from 'react';
import ButtonAdd from '../common/ButtonAdd';

const Values = ({ value, onHandleValue, showValue }) => {
  const [currentValue, setCurrentValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    if (isTouched) {
      const validatevalue = currentValue > 0;
      setIsValid(validatevalue);
    }
  }, [isTouched]);

  function handleValue(e) {
    e.preventDefault();

    setIsTouched(true);

    const validatevalue = currentValue > 0;
    setIsValid(validatevalue);

    if (validatevalue) {
      const valueInput = currentValue;

      onHandleValue(valueInput);
    }
    setCurrentValue('');
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleValue();
    }
  }

  let message;
  if (isTouched && !isValid) {
    message = 'Digite um valor válido!';
  }

  return (
    <>
      <div className="container flex gap-2 items-center justify-around text-textColor font-bold">
        <div className="flex flex-col items-center gap-2">
          <div className="flex">
            <form onSubmit={handleValue}>
              <input
                type="text"
                value={currentValue}
                placeholder="R$ Digite o valor"
                onChange={(e) => {
                  setCurrentValue(e.target.value.replace(',', '.'));
                  setIsTouched(true);
                }}
                className="w-32 h-8 pl-1 rounded-md text-sm mr-1 text-textColorBlack"
              />
              <ButtonAdd style={'btnAddValue'} onClick={handleValue}>
                +
              </ButtonAdd>
            </form>
          </div>
          <div>
            {showValue && (
              <p className="bg-primary px-2 py-4 rounded-md">
                Valor da conta R$ <span>{value}</span>
              </p>
            )}

            <p className="text-sm text-primary underline">{message}</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p>Restante</p>
          <p>R$ {value}</p>
        </div>
      </div>
    </>
  );
};

export default Values;
