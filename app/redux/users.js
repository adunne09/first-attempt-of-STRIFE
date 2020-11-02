import axios from "axios";

const GET_USER = "GET_USER";
export const getUser = (game) => ({
  type: GET_USER,
  game,
});
export const fetchUser = (id) => {
  return async (dispatch) => {
    const { data: user } = await axios.get(`/users/${id}`);
    dispatch(getUser(user));
  };
};

const NEW_USER = "NEW_USER";
export const newUser = (createdUser) => ({
  type: NEW_USER,
  createdUser,
});
export const createUser = (user) => {
  return async (dispatch) => {
    const { data: newUser } = await axios.post("/api/users", user);
    dispatch(newUser(newUser));
  };
};

const UPDATE_USER = "UPDATE_USER";
export const updateUser = (updatedUser) => ({
  type: UPDATE_USER,
  updatedUser,
});
export const putUser = (user) => {
  return async (dispatch) => {
    const { data: updatedUser } = await axios.put("/api/users", user);
    dispatch(updateUser(updatedUser));
  };
};

const DELETE_USER = "DELETE_USER";
export const deleteUser = (deletedUser) => ({
  type: DELETE_USER,
  deletedUser,
});
export const removeUser = (user) => {
  return async (dispatch) => {
    const { data: deletedUser } = await axios.delete("/api/users", user);
    dispatch(deleteUser(deletedUser));
  };
};

export default function userReducer(state = [], action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case NEW_USER:
      return [...state, action.createdUser];
    case UPDATE_USER:
      return state.map((user) => {
        return user.id === action.updatedUser.id ? action.updatedUser : user;
      });
    case DELETE_USER:
      return state.filter((user) => user.id !== action.deletedUser.id);
    default:
      return state;
  }
}
