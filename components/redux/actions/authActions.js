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
    const res = await fetch('https://mindcraft-api.herokuapp.com/auth/login',  {
        method: 'POST',
        headers: {
          Accept: 'application/json',
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

export const auth = (email, password) => async dispatch => {
  let res
  try {
    res = await fetch(`https://mindcraft-api.herokuapp.com/auth/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
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

export const signup = (email, password) => async dispatch => {
  let res
  try {
      res = await fetch('http://mindcraft-api.herokuapp.com/auth/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
        method: 'signup'
      })
    })
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
      const response = await fetch('https://mindcraft-api.herokuapp.com/api/users/signup', {
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

const authReducer = (state = initialState, action) =>{
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return state
    case CREATE_USER:
      return {...state, user: action.newUser}
    default:
      return state
  }
}

export default authReducer