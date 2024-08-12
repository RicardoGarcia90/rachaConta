import React from 'react';
import Friend from './Friend';

const FriendsList = ({ friends, valor, onRemoveFriend }) => {
  if (friends.length < 1)
    return <p className="text-white text-center">Nenhum amigo adicionado</p>;

  const numberFriends = friends.length;

  return (
    <>
      <div className="text-textColor container mt-4">
        <p className="font-bold">Amigos</p>
        <ul className="flex flex-col gap-3">
          {friends.map((friend) => (
            <Friend
              numberFriends={numberFriends}
              friend={friend}
              key={friend.id}
              valor={valor}
              onRemoveFriend={onRemoveFriend}
              id={friend.id}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default FriendsList;
