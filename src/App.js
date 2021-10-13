import "./styles.css";
import {
  INCREAMENT_COUNTER,
  DECREAMENT_COUNTER,
  ADD_COUNTER,
  MULTIPLY_COUNTER,
  SUBTRACT_COUNTER,
  DIVIDE_COUNTER,
} from "./Redux/actionsTypes";
import { useDispatch, useSelector } from "react-redux";
import counterInc from "./Redux/actions";
import { useState } from "react";

export default function App() {
  const dispatch = useDispatch();
  const [number, setNumber] = useState();
  const counter = useSelector((state) => state.counter);
  const handleClick = () => {
    const payloadInc = {
      type: INCREAMENT_COUNTER,
      payload: 1,
    };
    const dispatchIncreament = counterInc(payloadInc);
    dispatch(dispatchIncreament);
  };
  const handleClick2 = () => {
    const payloadInc = {
      type: DECREAMENT_COUNTER,
      payload: 1,
    };
    const dispatchIncreament = counterInc(payloadInc);
    dispatch(dispatchIncreament);
  };
  const HandlerAdd = () => {
    const payload = {
      type: ADD_COUNTER,
      payload: number,
    };
    const dispatchAdd = counterInc(payload);
    dispatch(dispatchAdd);
  };
  const HandlerMul = () => {
    const payload = {
      type: MULTIPLY_COUNTER,
      payload: number,
    };
    const dispatchMul = counterInc(payload);
    dispatch(dispatchMul);
  };
  const HandlerSub = () => {
    const payload = {
      type: SUBTRACT_COUNTER,
      payload: number,
    };
    const dispatchSub = counterInc(payload);
    dispatch(dispatchSub);
  };
  const HandlerDiv = () => {
    const payload = {
      type: DIVIDE_COUNTER,
      payload: number,
    };
    const dipatchDiv = counterInc(payload);
    dispatch(dipatchDiv);
  };
  return (
    <div className="App">
      <h1>custom calculator</h1>
      <h1>{counter}</h1>
      <button onClick={handleClick}>increament</button>
      <button onClick={handleClick2}>decreament</button>
      <br />
      <div style={{ marginTop: "2rem" }}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="enter-number"
        />
      </div>
      <button
        onClick={HandlerAdd}
        style={{ marginTop: "1rem", marginRight: "1rem" }}
      >
        add
      </button>
      <button onClick={HandlerMul}>multiply</button>
      <br />
      <button
        onClick={HandlerSub}
        style={{ marginTop: "2rem", marginRight: "1rem" }}
      >
        subtract
      </button>
      <button onClick={HandlerDiv}>divide</button>
    </div>
  );
}
