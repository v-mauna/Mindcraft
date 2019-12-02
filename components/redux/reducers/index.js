import {combineReducers} from 'redux'
import usersReducer from './usersReducer'
import singleMeditationReducer from './singleMeditationReducer'

const reducer = combineReducers({usersReducer,singleMeditationReducer})

export default reducer
