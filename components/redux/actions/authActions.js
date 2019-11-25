import {GET_USER, CREATE_USER, REMOVE_USER} from './types'

const initialState = {
    user: {}
  }

const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const createUser = newUser => ({type: CREATE_USER, newUser})

//Thunks

export const me = () => async dispatch => {
  try {
    const res = await fetch('https://mindcraft-api.herokuapp.com/api/auth/me',  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );
    const resData = await res.json();
    console.log(resData);
    dispatch({ type: GET_USER});
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await fetch(`https://mindcraft-api.herokuapp.com/api/auth/${method}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );
    const resData = await res.json();
    console.log(resData);
    dispatch({ type: GET_USER});
    }catch (authError) {
    return dispatch(getUser({error: authError}))
  }
}


export const createdUser = newUser => {
  return async dispatch => {
    try {
      const response = await fetch('https://mindcraft-api.herokuapp.com//api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );
    const resData = await response.json();
    console.log(resData);
    dispatch({ type: CREATE_USER });
    } catch (err) {
      console.log('User was not created. See: ', err)
    }
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
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
