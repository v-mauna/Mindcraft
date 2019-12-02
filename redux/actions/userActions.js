import {
  FETCHING_USER_FAILURE,
  FETCHING_USER_SUCCESS,
  FETCHING_USER_REQUEST
} from "./types";

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

export const fetchUser = id => {
  return async dispatch => {
    try {
      let response = await fetch(
        `http://mindcraft-api.herokuapp.com/api/users/${id}`

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
  console.log("got to update user");
  console.log("id in update user:", id);
    console.log("num of meditation in update user:", meditations)
  return async () => {
    try {
      const response = await fetch(
        // `https://mindcraft-api.herokuapp.com/api/users/${id}`,
        `http://localhost:8080/api/users/${id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",b
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            totalMeditations: meditations
          })

        }
      );
      const resData = await response.json();
      console.log(content);
    } catch (error) {
      console.error("Here is your error", error);
      dispatch(fetchingUserFailure(error));
    }
  };
};

