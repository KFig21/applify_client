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
      .then((token_applify) => {
        localStorage.setItem("token_applify", token_applify.data);
        dispatch({
          type: REGISTER,
          token_applify: token_applify.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const login = (cred, setErrorHandler, setFetching) => {
  return (dispatch) => {
    axios
      .post(`${url}/auth/login`, cred)
      .then((token_applify) => {
        localStorage.setItem("token_applify", token_applify.data);
        dispatch({
          type: LOGIN,
          token_applify: token_applify.data,
        });
        setFetching(false);
      })
      .catch((error) => {
        if (error.response) {
          dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data,
          });
        }
        setErrorHandler({ error: true, message: error.response.data });
        setFetching(false);
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
    const token_applify = getState().user.token_applify;
    // const user = jwtDecode(token_applify);
    // console.log(user);
    if (token_applify) {
      dispatch({
        type: CURRENT_USER,
        token_applify: token_applify,
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
      .then((token_applify) => {
        localStorage.setItem("token_applify", token_applify.data);
        dispatch({
          type: LIMIT_UPDATE,
          token_applify: token_applify.data,
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
      .then((token_applify) => {
        localStorage.setItem("token_applify", token_applify.data);
        dispatch({
          type: THEME_UPDATE,
          token_applify: token_applify.data,
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
      .then((token_applify) => {
        localStorage.setItem("token_applify", token_applify.data);
        dispatch({
          type: QUICKLINK_UPDATE,
          token_applify: token_applify.data,
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
