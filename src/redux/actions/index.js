import history from "../../history";
import streams from "../apis/streams";
import {
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  SIGN_IN,
  SIGN_OUT,
} from "./types";

export const signIn = () => {
  return {
    type: SIGN_IN,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (values) => async (dispatch) => {
  const response = await streams.post("/streams", values);
  dispatch({
    type: CREATE_STREAM,
    payload: response.data,
  });
  history.push("/");
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");
  dispatch({
    type: FETCH_STREAMS,
    payload: response.data,
  });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({
    type: FETCH_STREAM,
    payload: response.data,
  });
};

export const editStream = (id, values) => async (dispatch) => {
  const response = await streams.patch(`/streams/${id}`, values);
  dispatch({
    type: EDIT_STREAM,
    payload: response.data,
  });
  history.push("/");
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);
  dispatch({
    type: DELETE_STREAM,
    payload: id,
  });
};
