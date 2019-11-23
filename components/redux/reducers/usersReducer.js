import {FETCHING_USERS_FAILURE, 
    FETCHING_USERS_SUCCESS, 
    FETCHING_USERS_REQUEST}from '../actions/types'

    const initialState = {
        isFetching: true,
        users: [],
        errorMessage: ''
    }

    const usersReducer = (state = initialState, action) => {
        switch(action.type){
            case FETCHING_USERS_REQUEST:
                return {...state, isFetching: true}
            case FETCHING_USERS_FAILURE: 
                return {...state, errorMessage: action.error}
            case FETCHING_USERS_SUCCESS:
                return {...state, isFetching: false, users:action.users}
            default: 
                return state
            }
    }

    export default usersReducer