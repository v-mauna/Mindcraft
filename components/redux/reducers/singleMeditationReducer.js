import {GOT_TIME, SET_TIME, SET_TIME_LEFT} from '../actions/types'


const initialState = {
  time: '0',
  timeLeft: '500'
};

const singleMeditationReducer  = (state = initialState, action) =>{
  switch (action.type) {
    case GOT_TIME:
      return state
    case SET_TIME:
      console.log('got to reducer, time', action.time )
      console.log('state in reducer:', state)
      return {...state, time: action.time}
    case SET_TIME_LEFT:
      return {...state, timeLeft: action.time}
    default:
        return state
  }
}

export default singleMeditationReducer
