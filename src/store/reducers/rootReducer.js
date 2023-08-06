import { combineReducers } from "redux";
import authReducer from "./authReducer";
import boardsReducer from "./boardsReducer";

const rootReducer = combineReducers({
  user: authReducer,
  boards: boardsReducer,
});

export default rootReducer;
