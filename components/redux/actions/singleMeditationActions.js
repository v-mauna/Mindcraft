import { GOT_TIME, SET_TIME } from "./types";



export const gotTime = () => ({
  type: GOT_TIME
});

export const setTime = newTime => ({
  type: SET_TIME,
  newTime
});

export const getTime = ()=>{
  dispatch(gotTime())
}


export const TimeToBe = (time) =>{
  dispatch(setTime(time))
}
