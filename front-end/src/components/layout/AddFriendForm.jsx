import React, { useState } from 'react';
import ButtonAdd from '../common/ButtonAdd';

const AddFriendForm = ({ onAddFriends }) => {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id: id,
      name,
      valor: 0,
    };

    onAddFriends(newFriend);

    setName(' ');
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
        <ButtonAdd style={'btnAddValue'} onClick={handleSubmit}>
          +
        </ButtonAdd>
      </form>
    </div>
  );
};

export default AddFriendForm;
