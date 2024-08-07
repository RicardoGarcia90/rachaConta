import React from 'react';

const Friend = ({ friend, valor, numberFriends }) => {
  const formatValue = friend.valor.toFixed(2);
  const divisionEqual = (valor / numberFriends).toFixed(2);

  let valorMostrado = formatValue;

  if (valor != undefined) {
    valorMostrado = divisionEqual;
  }

  return (
    <li className="bg-backgroundCardFriend rounded-md p-2">
      <div className=" flex justify-between px-3 ">
        <h3 className="text-textColorBlack">{friend.name}</h3>
        <p className="text-primary font-bold">{`R$ ${valorMostrado}`}</p>
      </div>
    </li>
  );
};

export default Friend;
