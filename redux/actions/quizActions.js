import {GET_ONE_QUIZ, GET_ALL_QUIZZES,UPDATE_QUIZ, CHANGED_QUESTION, INCREMENTED_CORRECT_ANSWERS, ANSWERED_CORRECTLY, ANSWER_SELECTED} from './types'

const initialState= {
    quizzes: [],
}

const quizInitialState ={
    quiz: {}
}

const getOneQuiz = quiz => ({
    type: GET_ONE_QUIZ,
    quiz
})

const getAllQuizzes = quizzes => ({
    type: GET_ALL_QUIZZES,
    quizzes
})


const changedQuestion = question =>({
    type: CHANGED_QUESTION,
    question
})

//Thunks
const incrementedCorrectAnswers =()=>({
    type: INCREMENTED_CORRECT_ANSWERS,

})

const answeredCorrectly = () =>({
    type: ANSWERED_CORRECTLY
})


const tickedAnswerSelected =()=>({
    type: ANSWER_SELECTED

})
export const gotAllQuizzes = () => async dispatch =>{
    try{
        let response = await fetch('http://mindcraft-api.herokuapp.com/api/tests/')
        response = await response.json()
        dispatch(getAllQuizzes(response))
    }catch(error){
        console.error(`Your error is:`,error)
    }
}

export const gotOneQuiz = userId => async dispatch => {
    try{
        let response = await fetch(`http://mindcraft-api.herokuapp.com/api/tests/${userId}`)
        response = await response.json()
        dispatch(getOneQuiz(response))
    }catch(error){
        console.error(`Your error is:`,error)
    }
}


export const changeQuestion = question => async dispatch =>{
    dispatch (changedQuestion(question))
}

export const incrementCorrectAnswers = () => async dispatch =>{
    console.log("got to increment ")
    dispatch(incrementedCorrectAnswers())
}

export const answerCorrectly = ()=> async dispatch =>{
    dispatch(answeredCorrectly())
}

export const tickAnswerSelected = () => async dispatch  =>{

    dispatch (tickedAnswerSelected())
}
