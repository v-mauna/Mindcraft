import {FETCHING_USERS_FAILURE, 
        FETCHING_USERS_SUCCESS, 
        FETCHING_USERS_REQUEST}from './types'
import {Alert} from 'react-native'
import { Constants, Google } from 'expo';

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

export const getUser = user => ({type: GET_USER, user})
export const removeUser = () => ({type: REMOVE_USER})
export const createUser = newUser => ({type: CREATE_USER, newUser})

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
