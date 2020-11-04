import axios from "axios";

const GET_USER = "GET_USER";
export const getUser = (user) => ({
  type: GET_USER,
  user,
});
export const fetchUser = (id) => {
  return async (dispatch) => {
    try {
      const { data: user } = await axios.get(`/api/users/${id}`);
      dispatch(getUser(user));
    } catch (err) {
      console.error(err);
    }
  };
};

const NEW_USER = "NEW_USER";
export const newUser = (createdUser) => ({
  type: NEW_USER,
  createdUser,
});
export const createUser = (user) => {
  return async (dispatch) => {
    try {
      const { data: newUser } = await axios.post("/api/users", user);
      dispatch(newUser(newUser));
    } catch (err) {
      console.error(err);
    }
  };
};

const UPDATE_USER = "UPDATE_USER";
export const updateUser = (updatedUser) => ({
  type: UPDATE_USER,
  updatedUser,
});
export const putUser = (user) => {
  return async (dispatch) => {
    try {
      const { data: updatedUser } = await axios.put("/api/users", user);
      dispatch(updateUser(updatedUser));
    } catch (err) {
      console.error(err);
    }
  };
};

// const DELETE_USER = "DELETE_USER";
// export const deleteUser = (deletedUser) => ({
//   type: DELETE_USER,
//   deletedUser,
// });
// export const removeUser = (user) => {
//   return async (dispatch) => {
//     const { data: deletedUser } = await axios.delete("/api/users", user);
//     dispatch(deleteUser(deletedUser));
//   };
// };

//AUTH
export const fetchMe = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/auth/me");
      dispatch(getUser(res.data));
    } catch (err) {
      console.error(err);
    }
  };
};

export const login = (credentials) => {
  return async (dispatch) => {
    const res = await axios.put("/auth/login", credentials);
    dispatch(getUser(res.data));
  };
};

export const logout = () => {
  return async (dispatch) => {
    await axios.delete("/auth/logout");
    dispatch(getUser({}));
  };
};

export default function userReducer(state = {}, action) {
  //state = {}?
  switch (action.type) {
    case GET_USER:
      return action.user;
    // return { ...state, ...action.user };
    //
    // { ...state, user: {...state.user, ...action.user} }
    case NEW_USER:
      // return [...state, action.createdUser];
      return action.createdUser;
    // { ...state, users: [ ...state.users, ...action.createdUser ] }
    case UPDATE_USER:
      // return state.map((user) => {
      //   return user.id === action.updatedUser.id ? action.updatedUser : user;
      // });
      return action.updatedUser;
    // { ...state, users: [...state.users^above] }
    // case DELETE_USER:
    //   return state.filter((user) => user.id !== action.deletedUser.id);
    // { ...state, users: [...state.users ^above]} }
    default:
      return state;
  }
}
