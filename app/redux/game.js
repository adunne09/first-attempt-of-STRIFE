import axios from "axios";

const GET_GAME = "GET_GAME";
export const getGame = (game) => ({
  type: GET_GAME,
  game,
});

export const fetchGame = (id) => {
  return async (dispatch) => {
    const { data: game } = await axios.get(`/api/games/${id}`);
    dispatch(getGame(game));
  };
};

const NEW_GAME = "NEW_GAME";
export const newGame = (createdGame) => ({
  type: NEW_GAME,
  createdGame,
});
export const createGame = (game) => {
  return async (dispatch) => {
    const { data: newGame } = await axios.post("/api/games", game);
    dispatch(newGame(newGame));
  };
};

const UPDATE_GAME = "UPDATE_GAME";
export const updateGame = (updatedGame) => ({
  type: UPDATE_GAME,
  updatedGame,
});
export const putGame = (game) => {
  return async (dispatch) => {
    const { data: updatedGame } = await axios.put("/api/games", game);
    dispatch(updateGame(updatedGame));
  };
};

const DELETE_GAME = "DELETE_GAME";
export const deleteGame = (deletedGame) => ({
  type: DELETE_GAME,
  deletedGame,
});
export const removeGame = (game) => {
  return async (dispatch) => {
    const { data: deletedGame } = await axios.delete("/api/games", game);
    dispatch(deleteGame(deletedGame));
  };
};

export default function gameReducer(state = [], action) {
  switch (action.type) {
    case GET_GAME:
      return action.game;
    case NEW_GAME:
      return [...state, action.createdGame];
    case UPDATE_GAME:
      return state.map((game) => {
        return game.id === action.updatedGame.id ? action.updatedGame : game;
      });
    case DELETE_GAME:
      return state.filter((game) => game.id !== action.deletedGame.id);
    default:
      return state;
  }
}
