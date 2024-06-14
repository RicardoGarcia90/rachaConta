import { useState } from 'react';
import Header from './components/Header';
import Values from './components/Values';

function App() {
  const [value, setValue] = useState();

  function handleValue(valueInput) {
    const formatValue = Number(valueInput).toFixed(2);
    setValue(formatValue);
  }

  return (
    <div className="container h-screen bg-backgroundTheme font-quicksand flex justify-center items-start">
      <div>
        <Header />
        <Values value={value} onHandleValue={handleValue} />
      </div>
    </div>
  );
}

export default App;
