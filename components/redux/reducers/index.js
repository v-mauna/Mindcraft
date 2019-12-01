import {combineReducers} from 'redux'
import usersReducer from './usersReducer'
import singleMeditationReducer from './singleMeditationReducer'
import quizzesReducer,{quizReducer} from './quizzesReducer'
import authReducer from './authReducer'


const reducer = combineReducers({usersReducer,singleMeditationReducer,quizzesReducer,quizReducer,authReducer})

export default reducer
