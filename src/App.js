import "./styles.css";
import { INCREAMENT_COUNTER, DECREAMENT_COUNTER } from "./Redux/actionsTypes";
import { useDispatch, useSelector } from "react-redux";
import counterInc from "./Redux/actions";

export default function App() {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);
  const handleClick = () => {
    const payloadInc = {
      type: INCREAMENT_COUNTER,
      payload: 1
    };
    const dispatchIncreament = counterInc(payloadInc);
    dispatch(dispatchIncreament);
  };
  const handleClick2 = () => {
    const payloadInc = {
      type: DECREAMENT_COUNTER,
      payload: 1
    };
    const dispatchIncreament = counterInc(payloadInc);
    dispatch(dispatchIncreament);
  };

  return (
    <div className="App">
      <h1>custom calculator</h1>
      <h1>{counter}</h1>
      <button onClick={handleClick}>increament</button>
      <button onClick={handleClick2}>decreament</button>
    </div>
  );
}
