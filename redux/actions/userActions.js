import {
  FETCHING_USER_FAILURE,
  FETCHING_USER_SUCCESS,
  FETCHING_USER_REQUEST
} from "./types";
import {saveUser} from '../../components/storage/userStorage'

import axios from 'axios'

export const fetchingUserRequest = () => {
  type: FETCHING_USER_REQUEST;
};

export const fetchingUserSuccess = user => ({
  type: FETCHING_USER_SUCCESS,
  user
});

export const fetchingUserFailure = error => ({
  type: FETCHING_USER_FAILURE,
  error
});

export const getUser = user => ({ type: GET_USER, user });
export const removeUser = () => ({ type: REMOVE_USER });
export const createUser = newUser => ({ type: CREATE_USER, newUser });
export const updatedUser = (user) => ({type: GET_USER, user})


export const fetchUser = id => {
  return async dispatch => {
    try {
      let response = await fetch(
        `https://mindcraft-api.herokuapp.com/api/users/${id}`
      );
      response = await response.json();
      console.log("Response", response);
      dispatch(fetchingUserSuccess(response));
    } catch (error) {
      console.error("Here is your error", error);
      dispatch(fetchingUserFailure(error));
    }
  };
};

export const updateUser = (id, meditations) => {
console.log('meditations in updateUser', meditations )
return async dispatch =>{
  const res= await axios.put(`https://mindcraft-api.herokuapp.com/api/users/${id}`, {totalMeditations: meditations})
  saveUser(res.data[1][0])
  dispatch(fetchingUserSuccess(res.data))
}
}


