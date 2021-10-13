import { INCREAMENT_COUNTER, DECREAMENT_COUNTER } from "./actionsTypes";
const initState = {
  counter: 0
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case INCREAMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter + payload
      };
    }
    case DECREAMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter - payload
      };
    }
    default:
      return state;
  }
};

export { reducer };
