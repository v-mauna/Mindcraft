import { GOT_TIME, SET_TIME, SET_TIME_LEFT, START_TIMER, TICK_TIMER } from "./types";


export const gotTime = () => ({
  type: GOT_TIME
});

export const setTime = time=> ({
  type: SET_TIME,
  time
});

export const setTimeLeft = time=>({

  type: SET_TIME_LEFT,
  time
});
export const startedTimer = ()=>({
  type: START_TIMER
});

export const tickedTimer = ()=>({
  type: TICK_TIMER
});

export const getTime = ()=>{
  return dispatch => dispatch(gotTime())
};

export const startTimer = () =>{
  return dispatch => dispatch(startedTimer())
};

export const tickTimer =() =>{
  return dispatch => dispatch (tickedTimer())
};

export const TimeToBe = (time) =>{
  console.log('got to timetobe, time is', time)
  return dispatch => dispatch(setTime(time))
};

export const setLeftTime = (time) =>{
  console.log('got to settimelft, time is', time)
  return dispatch => dispatch(setTimeLeft(time))
};
