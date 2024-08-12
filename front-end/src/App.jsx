import { useState } from 'react';
import Header from './components/layout/Header';
import Values from './components/layout/Values';
import FriendsList from './components/layout/FriendsList';
import AddFriendForm from './components/layout/AddFriendForm';

function App() {
  const [value, setValue] = useState();
  const [showValue, setShowValue] = useState(false);
  const [friends, setFriends] = useState([]);

  function handleValue(valueInput) {
    const formatValue = Number(valueInput).toFixed(2);
    setValue(formatValue);
    setShowValue(true);
  }

  function addFriends(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  function removeFriends(id) {
    setFriends((friends) => friends.filter((friend) => friend.id !== id));
  }

  return (
    <div className="container h-screen bg-backgroundTheme font-quicksand flex justify-center items-start">
      <div>
        <Header />
        <Values
          value={value}
          showValue={showValue}
          onHandleValue={handleValue}
        />
        {showValue}
        <FriendsList
          friends={friends}
          valor={value}
          onRemoveFriend={removeFriends}
        />
        <AddFriendForm onAddFriends={addFriends} />
      </div>
    </div>
  );
}

export default App;
