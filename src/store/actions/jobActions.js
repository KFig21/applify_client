import {
  JOB_NEW,
  JOB_NEW_FAIL,
  JOB_EDIT,
  JOB_EDIT_FAIL,
  JOB_DELETE,
  JOB_DELETE_FAIL,
} from "./types";
import axios from "axios";
import { url } from "../../helpers/Api";

export const createNewJob = (data, setErrorHandler) => {
  return (dispatch) => {
    axios
      .post(`${url}/jobs/new`, data)
      .then((jobs) => {
        setErrorHandler({ error: false, message: "" });
        dispatch({
          type: JOB_NEW,
          jobs,
        });
      })
      .catch((error) => {
        if (error.response) {
          dispatch({
            type: JOB_NEW_FAIL,
            payload: error.response.data,
          });
        }
        setErrorHandler({ error: true, message: error.response.data });
      });
  };
};

export const editJob = (data, setErrorHandler) => {
  return (dispatch) => {
    axios
      .put(`${url}/jobs/edit`, data)
      .then((jobs) => {
        dispatch({
          type: JOB_EDIT,
          jobs,
        });
      })
      .catch((error) => {
        if (error.response) {
          dispatch({
            type: JOB_EDIT_FAIL,
            payload: error.response.data,
          });
        }
        setErrorHandler({ error: true, message: error.response.data });
      });
  };
};

export const deleteJob = (data, setErrorHandler) => {
  return (dispatch) => {
    axios
      .delete(`${url}/jobs/delete`, {
        data: {
          data: data,
        },
      })
      .then((jobs) => {
        dispatch({
          type: JOB_DELETE,
          jobs,
        });
      })
      .catch((error) => {
        if (error.response) {
          dispatch({
            type: JOB_DELETE_FAIL,
            payload: error.response.data,
          });
        }
        setErrorHandler({ error: true, message: error.response.data });
      });
  };
};
