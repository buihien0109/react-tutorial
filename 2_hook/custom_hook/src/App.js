import './App.css';
import BetterClock from './components/BetterClock';
import Clock from './components/Clock';
import MagicBox from './components/MagicBox';

function App() {
  return (
    <div className="app">
      <h2>Custom Hook demo</h2>

      {/* <Clock />
      <BetterClock /> */}

      <MagicBox />
    </div>
  );
}

export default App;
