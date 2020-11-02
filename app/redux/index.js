import { combineReducers } from "redux";
import gameReducer from "./game";
import userReducer from "./users";

const appReducer = combineReducers({
  games: gameReducer,
  users: userReducer,
});

export default appReducer;
