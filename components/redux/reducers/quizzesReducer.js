import {GET_ONE_QUIZ, GET_ALL_QUIZZES,UPDATE_QUIZ} from '../actions/types'

const initialState= {
    quizzes: [],
}

const quizzesReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_QUIZZES:{
            return {...state,quizzes: action.quizzes}
        }
        default: 
             return state
    }
}

export default quizzesReducer