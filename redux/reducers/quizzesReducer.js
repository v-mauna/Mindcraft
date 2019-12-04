import {GET_ONE_QUIZ, GET_ALL_QUIZZES,UPDATE_QUIZ, CHANGED_QUESTION, INCREMENTED_CORRECT_ANSWERS, ANSWERED_CORRECTLY, ANSWER_SELECTED} from '../actions/types'



const initialState ={
    quiz: {},
    question: {},
    answerCorrect: false,
    correctCount: 0,
    answerSelected: false
}


export const quizReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_ONE_QUIZ:
            return{...state, quiz: action.quiz}
        case CHANGED_QUESTION:
            return {...state, question: action.question}
         case INCREMENTED_CORRECT_ANSWERS:
               return {...state, correctCount: state.correctCount+1}
        case  ANSWERED_CORRECTLY:
                return {...state, answerCorrect: true}
        case ANSWER_SELECTED:
                    return {...state, answerSelected: true}
        default:
            return state
    }
}


export default quizReducer
