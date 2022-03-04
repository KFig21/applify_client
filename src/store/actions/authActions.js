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
} from "./types";
import axios from "axios";
import { url } from "../../helpers/Api";

export const register = (user) => {
  return (dispatch) => {
    axios
      .post(`${url}/auth/register`, user)
      .then((token) => {
        localStorage.setItem("token", token.data);
        dispatch({
          type: REGISTER,
          token: token.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const login = (cred, setErrorHandler) => {
  return (dispatch) => {
    axios
      .post(`${url}/auth/login`, cred)
      .then((token) => {
        localStorage.setItem("token", token.data);
        dispatch({
          type: LOGIN,
          token: token.data,
        });
      })
      .catch((error) => {
        if (error.response) {
          dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data,
          });
        }
        setErrorHandler({ error: true, message: error.response.data });
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT,
    });
  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().user.token;
    // const user = jwtDecode(token);
    // console.log(user);
    if (token) {
      dispatch({
        type: CURRENT_USER,
        token,
      });
    } else {
      return null;
    }
  };
};

export const updatePageLimit = (data) => {
  return (dispatch) => {
    axios
      .put(`${url}/auth/limit`, data)
      .then((token) => {
        localStorage.setItem("token", token.data);
        dispatch({
          type: LIMIT_UPDATE,
          token: token.data,
        });
      })
      .catch((error) => {
        if (error.response) {
          dispatch({
            type: LIMIT_UPDATE_FAIL,
            payload: error.response.data,
          });
        }
      });
  };
};

export const updateTheme = (data) => {
  return (dispatch) => {
    axios
      .put(`${url}/auth/theme`, data)
      .then((token) => {
        localStorage.setItem("token", token.data);
        dispatch({
          type: THEME_UPDATE,
          token: token.data,
        });
      })
      .catch((error) => {
        if (error.response) {
          dispatch({
            type: THEME_UPDATE_FAIL,
            payload: error.response.data,
          });
        }
      });
  };
};

export const updateQuicklinks = (data) => {
  return (dispatch) => {
    axios
      .put(`${url}/auth/quicklink`, data)
      .then((token) => {
        localStorage.setItem("token", token.data);
        dispatch({
          type: QUICKLINK_UPDATE,
          token: token.data,
        });
      })
      .catch((error) => {
        if (error.response) {
          dispatch({
            type: QUICKLINK_UPDATE_FAIL,
            payload: error.response.data,
          });
        }
      });
  };
};
