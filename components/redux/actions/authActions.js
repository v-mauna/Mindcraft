import {GET_USER, CREATE_USER, REMOVE_USER} from './types'

const initialState = {
    user: {}
  }

const getUser = user => ({type: GET_USER, user})
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
          method: 'login',
          returnSecureToken: true,
          returnSecureToken: true
        })
      }
    );
    const resData = await res.json();
    console.log(resData);
    dispatch(getUser(resData));
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password) => async dispatch => {
  let res
  try {
      res = await fetch('http://mindcraft-api.herokuapp.com/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
        method: 'login',
        returnSecureToken: true
      })
    })
    const resData = await res.json();
    console.log('resData',resData);
    dispatch(getUser(resData));
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
    dispatch(createUser(resData));
    }catch (authError) {
    return dispatch(getUser({error: authError}))
  }
}




const authReducer = (state = initialState, action) =>{
  switch (action.type) {
    case GET_USER:
      return {userId: action.userId, token: action.token}
    case REMOVE_USER:
      return state
    case CREATE_USER:
      return {token: action.token,userId: action.newUser.id}
    default:
      return state
  }
}

export default authReducer