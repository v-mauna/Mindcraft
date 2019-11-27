import {combineReducers} from 'redux'
import usersReducer from './usersReducer'
import singleMeditationReducer from './singleMeditationReducer'
import quizzesReducer from './quizzesReducer'
import authReducer from './authReducer'

const reducer = combineReducers({usersReducer,singleMeditationReducer,quizzesReducer,authReducer})

export default reducer
