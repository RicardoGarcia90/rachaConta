import { useState } from 'react';
import Header from './components/layout/Header';
import Values from './components/layout/Values';
import SelectDivisionType from './components/layout/SelectDivisionType';
import FriendsList from './components/layout/FriendsList';
import AddFriendForm from './components/layout/AddFriendForm';

const initialFriends = [
  {
    id: 1,
    name: 'Ricardo Garcia',
    valor: 10,
  },
  {
    id: 2,
    name: 'Ivy Tentoni',
    valor: 30,
  },
  {
    id: 3,
    name: 'Astro Pastor',
    valor: 15,
  },
  {
    id: 4,
    name: 'Cosmo Golden',
    valor: 10,
  },
];

function App() {
  const [value, setValue] = useState();
  const [showValue, setShowValue] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  function handleValue(valueInput) {
    const formatValue = Number(valueInput).toFixed(2);
    setValue(formatValue);
    setShowValue(true);
  }

  function addFriends(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  return (
    <div className="container h-auto bg-backgroundTheme font-quicksand flex justify-center items-start">
      <div>
        <Header />
        <Values
          value={value}
          showValue={showValue}
          onHandleValue={handleValue}
        />
        {showValue && <SelectDivisionType />}
        <FriendsList friends={friends} />
        <AddFriendForm onAddFriends={addFriends} />
      </div>
    </div>
  );
}

export default App;
