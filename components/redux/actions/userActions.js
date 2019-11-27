import {FETCHING_USER_FAILURE,
        FETCHING_USER_SUCCESS,
        FETCHING_USER_REQUEST}from './types'


export const fetchingUserRequest = () => {
    type: FETCHING_USER_REQUEST
}

export const fetchingUserSuccess = (user) =>({
    type: FETCHING_USER_SUCCESS,
    user
})

export const fetchingUserFailure = (error) =>({
    type: FETCHING_USER_FAILURE,
    error})

export const getUser = user => ({type: GET_USER, user})
export const removeUser = () => ({type: REMOVE_USER})
export const createUser = newUser => ({type: CREATE_USER, newUser})

export const fetchUser = (id) => {
    return async dispatch=>{
        try{
            let response = await fetch(`https://mindcraft-api.herokuapp.com/api/users/${id}`)
            response = await response.json()
            console.log('Response',response)
            dispatch(fetchingUserSuccess(response))
        }catch(error){
            console.error('Here is your error', error)
            dispatch(fetchingUserFailure(error))
        }
    }
}

export const updateUser =(id) =>{
    return async dispatch=>{
        try{
            let data = await postData(`https://mindcraft-api.herokuapp.com/api/users/${id}`, {meditations: meditations+1})
        }catch(error){
            console.error('Here is your error', error)

    }
}
}
