import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import ButtonHandle from '../common/ButtonHandle';

function testeButton() {
  console.log('Botão clicado!');
}

const Friend = ({ friend, valor, numberFriends, onRemoveFriend, id }) => {
  const formatValue = friend.valor.toFixed(2);
  const divisionEqual = (valor / numberFriends).toFixed(2);

  let valorMostrado = formatValue;

  if (valor != undefined) {
    valorMostrado = divisionEqual;
  }

  return (
    <li className=" flex justify-between items-center">
      <div className="bg-backgroundCardFriend rounded-md flex justify-between gap-2 p-2 w-full">
        <h3 className="text-textColorBlack">{friend.name}</h3>
        <p className="text-primary font-bold">{`R$ ${valorMostrado}`}</p>
      </div>
      <div>
        <ButtonHandle onClick={() => onRemoveFriend(id)}>
          <FaTrashAlt className="ml-1" />
        </ButtonHandle>
      </div>
    </li>
  );
};

export default Friend;
