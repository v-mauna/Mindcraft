import {FETCHING_USERS_FAILURE, 
        FETCHING_USERS_SUCCESS, 
        FETCHING_USERS_REQUEST}from './types'

export const fetchingUsersRequest = () => {
    type: FETCHING_USERS_REQUEST
}

export const fetchingUsersSuccess = (users) =>({
    type: FETCHING_USERS_SUCCESS,
    users
})

export const fetchingUsersFailure = (error) =>({
    type: FETCHING_USERS_FAILURE,
    error})

export const fetchUsers = () => {
    return async dispatch=>{
        try{
            let response = await fetch('https://mindcraft-api.herokuapp.com/api/users')
            response = await response.json()
            console.log('Response',response)
            dispatch(fetchingUsersSuccess(response))
        }catch(error){
            console.error('Here is your error', error)
            dispatch(fetchingUsersFailure(error))
        }
    }
}



