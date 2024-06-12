import React, { useState } from 'react';

const Values = () => {
  const [value, setValue] = useState('--,--');

  function handleValue() {
    e.preventDefault();

    // ADICIONAR LOGICA PARA ATUALIZAR O VALOR DA CONTA
  }

  return (
    <>
      <div className="container flex gap-2 items-center justify-around text-textColor font-bold">
        <div className="flex flex-col items-center gap-2">
          <div>
            <form action="submit">
              <input
                type="text"
                placeholder="R$ Digite o valor"
                onChange={(e) => setValue(e.target.value)}
                className="w-32 h-8 pl-1 rounded-md text-sm mr-1"
              />
              <button
                onClick={handleValue}
                className="bg-green-500 px-2 rounded-full text-xl"
              >
                +
              </button>
            </form>
          </div>
          <p onClick={handleValue} className="bg-primary px-2 py-4 rounded-md">
            Valor da conta R$ <span>{value}</span>
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p>Restante</p>
          <p>R$ --,--</p>
        </div>
      </div>
    </>
  );
};

export default Values;
