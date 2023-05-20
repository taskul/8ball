import logo from './logo.svg';
import './App.css';
import Clicker from './Clicker';
import EightBall from './EightBall';
import ColorBoxes from './ColorBoxes';

function App() {
  return (
    <div>
      <ColorBoxes numOfBoxes={6}/>
      <EightBall />
      {/* <Clicker /> */}
    </div>
  );
}

export default App;
