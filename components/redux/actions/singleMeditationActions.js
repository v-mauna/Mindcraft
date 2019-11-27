import { GOT_TIME, SET_TIME, SET_TIME_LEFT } from "./types";


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
})

export const getTime = ()=>{

  return dispatch => dispatch(gotTime())
}


export const TimeToBe = (time) =>{
  return dispatch => dispatch(setTime(time))
}

export const setLeftTime = (time) =>{
  return dispatch => dispatch(setTimeLeft(time))
}
