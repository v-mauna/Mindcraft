import {GET_USER, CREATE_USER, REMOVE_USER} from '../../redux/actions/types'

const initialState = {user: {}}

const authReducer = (state = initialState, action) =>{
    switch (action.type) {
      case GET_USER:
        return action.user
      case REMOVE_USER:
        return defaultUser
      case CREATE_USER:
        return {...state, user: action.newUser}
      default:
        return state
    }
  }
  export default authReducer
  