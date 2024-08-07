import React from 'react';

const Friend = ({ friend }) => {
  const formatValor = Number(friend.valor).toFixed(2);

  console.log(friend);

  return (
    <li className="bg-backgroundCardFriend rounded-md p-2">
      <div className=" flex justify-between px-3 ">
        <h3 className="text-textColorBlack">{friend.name}</h3>
        <p className="text-primary font-bold">{`R$ ${formatValor}`}</p>
      </div>
    </li>
  );
};

export default Friend;
