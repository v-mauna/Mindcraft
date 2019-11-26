import { GOT_TIME, SET_TIME } from "./types";


export const gotTime = () => ({
  type: GOT_TIME
});

export const setTime = time=> ({
  type: SET_TIME,
  time
});

export const getTime = ()=>{
  console.log('got to thunk get time')
  return dispatch => dispatch(gotTime())
}


export const TimeToBe = (time) =>{
  console.log('got to thunk time to be, time:', time)
  return dispatch => dispatch(setTime(time))
}
