import React, { useState } from 'react';
import ButtonHandle from '../common/ButtonHandle';

const AddFriendForm = ({ onAddFriends }) => {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim() === '') return;

    const id = crypto.randomUUID();

    const newFriend = {
      id: id,
      name,
      valor: 0,
    };

    onAddFriends(newFriend);

    setName('');
  }

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="flex justify-between bg-primary py-2 px-4 rounded-md mt-3"
      >
        <input
          placeholder="Novo amigo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="py-1 px-4"
        />
        <ButtonHandle style={'btnAddValue'} type="submit">
          +
        </ButtonHandle>
      </form>
    </div>
  );
};

export default AddFriendForm;
