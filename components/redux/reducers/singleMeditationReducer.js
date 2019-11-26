import {GOT_TIME, SET_TIME} from '../../redux/actions/types'


const initialState = {
  time: '0'
};

const singleMeditationReducer  = (state = initialState, action) =>{
  switch (action.type) {
    case GOT_TIME:
      return state
    case SET_TIME:
      console.log('got to reducer, time', action.time )
      console.log('state in reducer:', state)
      return {...state, time: action.time}
    default:
        return state
  }
}

export default singleMeditationReducer
