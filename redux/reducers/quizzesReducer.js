import {GET_ONE_QUIZ, GET_ALL_QUIZZES,UPDATE_QUIZ, CHANGED_QUESTION, INCREMENTED_CORRECT_ANSWERS, ANSWERED_CORRECTLY} from '../actions/types'



const initialState ={
    quiz: {},
    question: {},
    answerCorrect: false,
    correctCount: 2
}

// const quizzesReducer = (state = initialState, action) => {
//     switch(action.type){
//         case GET_ALL_QUIZZES:{
//             return {...state,quizzes: action.quizzes}
//         }
//         default:
//              return state
//     }
// }

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
        default:
            return state
    }
}


export default quizReducer
