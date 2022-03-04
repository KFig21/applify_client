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
  token: localStorage.getItem("token"),
};

const authReducer = (state = initialState, action) => {
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
      const user = jwtDecode(action.token);
      return {
        token: action.token,
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
        token: null,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        username: null,
        email: null,
        firstname: null,
        lastname: null,
        theme: null,
        limit: null,
        boards: [],
        quicklinks: [],
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
