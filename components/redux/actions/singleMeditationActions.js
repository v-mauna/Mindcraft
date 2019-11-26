import { GOT_TIME, SET_TIME } from "./types";


export const gotTime = () => ({
  type: GOT_TIME
});

export const setTime = time=> ({
  type: SET_TIME,
  time
});

export const getTime = ()=>{

  return dispatch => dispatch(gotTime())
}


export const TimeToBe = (time) =>{

  return dispatch => dispatch(setTime(time))
}


export const reduceTime = (time) =>{
  console.log('got to thunk reduce time, time:', time)
  if(time===0){
    return dispatch =>dispatch(TimeToBe(0))
  }
  else{
    return dispatch => dispatch(TimeToBe(time-1000))
  }

}
