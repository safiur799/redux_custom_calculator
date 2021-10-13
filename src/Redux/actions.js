// import {INCREAMENT_COUNTER} from "./actionsTypes"

const counterInc = ({ type, payload }) => {
  return {
    type: type,
    payload: payload
  };
};

export default counterInc;
