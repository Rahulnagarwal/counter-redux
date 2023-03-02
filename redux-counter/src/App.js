import { useDispatch } from 'react-redux/es/exports';
import './App.css';
import Count from './components/count';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={e => dispatch({ type: 'INCRE' })}>Icrement</button>
      <Count />
      <button onClick={e => dispatch({ type: 'DECRE' })}>Decrement</button>
    </div>
  );
}

export default App;
