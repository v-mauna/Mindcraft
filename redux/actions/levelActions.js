import {GET_ONE_LEVEL, GET_ALL_LEVELS} from './types'


const getOneLevel = level => ({
  type: GET_ONE_LEVEL,
  level
})

const getAllLevels = levels => ({
  type: GET_ALL_LEVELS,
  levels
})

export const gotAllLevels = () => async dispatch => {
  try {
    let response = await fetch('http://mindcraft-api.herokuapp.com/api/levels/')
    response = await response.json()
    dispatch(getAllLevels(response))
  } catch (error) {
    console.error(error)
  }
}

export const gotOneLevel = id => async dispatch => {
  try {
    let response = await fetch(`http://mindcraft-api.herokuapp.com/api/levels/${id}`)
    response = await response.json()
    dispatch(getOneLevel(response))
  } catch (error) {
    console.error(error)
  }
}
