import {
  GOT_TIME,
  SET_TIME,
  SET_TIME_LEFT,
  START_TIMER,
  TICK_TIMER
} from "../../redux/actions/types";
// import { resetWarningCache } from "../../../../../Library/Caches/typescript/3.6/node_modules/@types/prop-types";

const initialState = {
  time: 0,
  timeLeft: 0,
  timeWentOff: false
};

const singleMeditationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_TIME:
      return state;
    case SET_TIME:
      console.log("got to set time educer, time:", action.time);
      return { ...state, time: action.time };
    case SET_TIME_LEFT:
      console.log("got to set time left reducer, time:", action.time);
      return { ...state, timeLeft: action.time };
    case START_TIMER:
      return { ...state, timeWentOff: true };
    case TICK_TIMER:
      return { ...state, timeWentOff: false };
    default:
      return state;
  }
};

export default singleMeditationReducer;
