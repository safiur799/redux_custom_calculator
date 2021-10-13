import {
  INCREAMENT_COUNTER,
  DECREAMENT_COUNTER,
  ADD_COUNTER,
  SUBTRACT_COUNTER,
  MULTIPLY_COUNTER,
  DIVIDE_COUNTER,
} from "./actionsTypes";
const initState = {
  counter: 0,
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case INCREAMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter + payload,
      };
    }
    case DECREAMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter - payload,
      };
    }
    case ADD_COUNTER: {
      return {
        ...state,
        counter: state.counter + Number(payload),
      };
    }
    case SUBTRACT_COUNTER: {
      return {
        ...state,
        counter: state.counter - Number(payload),
      };
    }
    case MULTIPLY_COUNTER: {
      return {
        ...state,
        counter: state.counter * payload,
      };
    }
    case DIVIDE_COUNTER: {
      return {
        ...state,
        counter: state.counter / payload,
      };
    }
    default:
      return state;
  }
};

export { reducer };
