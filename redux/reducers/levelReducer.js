import { GET_ONE_LEVEL, GET_ALL_LEVELS } from '../actions/types'

const initialState = {
  levels: {},
  level: {},
}

export const levelReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_LEVELS:
      return { ...state, levels: action.levels }
    case GET_ONE_LEVEL:
      return { ...state, level: action.level }
    default:
      return state
  }
}

export default levelReducer
