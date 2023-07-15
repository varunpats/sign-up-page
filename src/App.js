import './App.css';
import Primary from './Components/Primary';
import Seconday from './Components/Secondary'

function App() {
  return (
    <div className="app">
      <div className='primary'>
        <Primary />
      </div>
      <div className='secondary'>
        <Seconday />
      </div>
    </div>
  );
}

export default App;
