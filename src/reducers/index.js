import { combineReducers } from "redux";
import gamesReducer from "./gameReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
});

export default rootReducer;
