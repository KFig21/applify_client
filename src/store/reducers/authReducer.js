import {
  LOGIN,
  LOGOUT,
  REGISTER,
  CURRENT_USER,
  LOGIN_FAIL,
  LIMIT_UPDATE,
  LIMIT_UPDATE_FAIL,
  THEME_UPDATE,
  THEME_UPDATE_FAIL,
  QUICKLINK_UPDATE,
  QUICKLINK_UPDATE_FAIL,
} from "../actions/types";
import jwtDecode from "jwt-decode";

const initialState = {
  username: null,
  email: null,
  firstname: null,
  lastname: null,
  theme: null,
  limit: null,
  boards: [],
  quicklinks: [],
  token_applify: localStorage.getItem("token_applify"),
};

const authReducer = (state = initialState, action) => {
  console.log(action.type);
  console.log(state);
  switch (action.type) {
    case CURRENT_USER:
    case LOGIN:
    case REGISTER:
    case LIMIT_UPDATE:
    case LIMIT_UPDATE_FAIL:
    case THEME_UPDATE:
    case THEME_UPDATE_FAIL:
    case QUICKLINK_UPDATE:
    case QUICKLINK_UPDATE_FAIL:
      const user = jwtDecode(action.token_applify);
      return {
        token_applify: action.token_applify,
        username: user.username,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        theme: user.theme,
        limit: user.limit,
        boards: user.boards,
        quicklinks: user.quicklinks,
        _id: user._id,
      };
    case LOGIN_FAIL:
      return {
        username: null,
        email: null,
        firstname: null,
        lastname: null,
        theme: null,
        limit: null,
        boards: [],
        quicklinks: [],
        token_applify: null,
      };
    case LOGOUT:
      localStorage.removeItem("token_applify");
      return {
        username: null,
        email: null,
        firstname: null,
        lastname: null,
        theme: null,
        limit: null,
        boards: [],
        quicklinks: [],
        token_applify: null,
      };
    default:
      return state;
  }
};

export default authReducer;
