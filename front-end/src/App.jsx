import Header from './components/Header';
import Values from './components/Values';

function App() {
  return (
    <div className="container h-screen bg-backgroundTheme font-quicksand flex justify-center items-start">
      <div>
        <Header />
        <Values />
      </div>
    </div>
  );
}

export default App;
