import {GOT_TIME, SET_TIME} from '../../redux/actions/types'


const initialState = {
  time: 0
};

const singleMeditationReducer  = (state = initialState, action) =>{
  switch (action.type) {
    case GOT_TIME:
      return state.time
    case SET_TIME:
      return {...state, time: action.newTime}
    default:
        return state
  }
}

export default singleMeditationReducer
