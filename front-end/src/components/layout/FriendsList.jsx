import React from 'react';
import Friend from './Friend';

const FriendsList = ({ friends }) => {
  return (
    <>
      <div className="text-textColor container mt-4">
        <p className="font-bold">Amigos</p>
        <ul className="flex flex-col gap-3">
          {friends.map((friend) => (
            <Friend friend={friend} key={friend.id} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default FriendsList;
