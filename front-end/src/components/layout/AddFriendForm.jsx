import React from 'react';
import ButtonAdd from '../common/ButtonAdd';

const AddFriendForm = () => {
  return (
    <div className="container">
      <div className="flex justify-between bg-primary py-2 px-4 rounded-md mt-3">
        <input placeholder="Novo amigo" className="py-1 px-4" />
        <ButtonAdd style={'btnAddValue'}>+</ButtonAdd>
      </div>
    </div>
  );
};

export default AddFriendForm;
