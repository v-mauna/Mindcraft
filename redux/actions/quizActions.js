import {GET_ONE_QUIZ, GET_ALL_QUIZZES,UPDATE_QUIZ} from './types'

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

//Thunks

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
        let response = await fetch(`http://mindcraft-api.herokuapp.com/api/users/${userId}/test`)
        response = await response.json()
        console.log('fetch Response', response)
        dispatch(getOneQuiz(response))
    }catch(error){
        console.error(`Your error is:`,error)
    }
}




