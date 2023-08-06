import {
  BOARD_NEW,
  BOARD_NEW_FAIL,
  BOARD_EDIT_NAME,
  BOARD_EDIT_NAME_FAIL,
  BOARD_DELETE,
  BOARD_DELETE_FAIL,
  GET_BOARDS,
  GET_BOARDS_FAIL,
} from "./types";
import axios from "axios";
import { url } from "../../helpers/Api";

export const getBoards = (data, setErrorHandler) => {
  return (dispatch) => {
    axios
      .get(`${url}/boards/all/${data.user}`)
      .then((boards) => {
        dispatch({
          type: GET_BOARDS,
          boards: boards,
        });
      })
      .catch((error) => {
        if (error.response) {
          dispatch({
            type: GET_BOARDS_FAIL,
            payload: error.response.data,
          });
        }
        setErrorHandler({ error: true, message: error.response.data });
      });
  };
};

export const createNewBoard = (data, setErrorHandler) => {
  return (dispatch) => {
    axios
      .post(`${url}/boards/new`, data)
      .then((board) => {
        dispatch({
          type: BOARD_NEW,
          board: board,
        });
      })
      .catch((error) => {
        if (error.response) {
          dispatch({
            type: BOARD_NEW_FAIL,
            payload: error.response.data,
          });
        }
        setErrorHandler({ error: true, message: error.response.data });
      });
  };
};

export const changeBoardName = (data, setErrorHandler) => {
  return (dispatch) => {
    axios
      .put(`${url}/boards/${data.boardId}`, data)
      .then((board) => {
        dispatch({
          type: BOARD_EDIT_NAME,
          board: board,
        });
      })
      .catch((error) => {
        if (error.response) {
          dispatch({
            type: BOARD_EDIT_NAME_FAIL,
            payload: error.response.data,
          });
        }
        setErrorHandler({ error: true, message: error.response.data });
      });
  };
};

export const deleteBoard = (data, setErrorHandler) => {
  return (dispatch) => {
    axios
      .delete(`${url}/boards/delete`, {
        data: {
          data: data,
        },
      })
      .then((board) => {
        dispatch({
          type: BOARD_DELETE,
          board: board,
        });
      })
      .catch((error) => {
        if (error.response) {
          dispatch({
            type: BOARD_DELETE_FAIL,
            payload: error.response.data,
          });
        }
        setErrorHandler({ error: true, message: error.response.data });
      });
  };
};
