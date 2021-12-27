import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/actions'


function App() {

  const myState = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(myState);

  return (
    <div className="App">
      <div className="container">
        <h2>Redux Increment / Decrement App</h2>
        <div className="counter">
          <button onClick={() => dispatch(decNumber(3))}><span>-</span></button>
          <div className="field">
            <input type="text" disabled value={myState.changeTheNumber} />
          </div>
          <button onClick={() => dispatch(incNumber(5))}><span>+</span></button>
        </div>
      </div>
    </div>
  );
}

export default App;
