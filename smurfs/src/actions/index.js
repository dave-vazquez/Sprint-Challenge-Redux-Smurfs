import axios from "axios";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const EDIT_SMURF_START = "EDIT_SMURF_START";
export const EDIT_SMURF_SUCCESS = "EDIT_SMURF_SUCCESS";
export const EDIT_SMURF_FAILURE = "EDIT_SMURF_FAILURE";

export const DELETE_SMURF_START = "DELETE_SMURF_START";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";

const localHost = "http://localhost:3333";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get(`${localHost}/smurfs`)
    .then(res => {
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_SMURFS_FAILURE, payload: err.message });
    });
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF_START });
  return axios
    .post(`${localHost}/smurfs`, smurf)
    .then(res => {
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
      return true;
    })
    .catch(err => {
      dispatch({ type: ADD_SMURF_FAILURE, payload: err.response.data.Error });
      return false;
    });
};

export const editSmurf = smurf => dispatch => {
  dispatch({ type: EDIT_SMURF_START });
  return axios
    .put(`${localHost}/smurfs/${smurf.id}`, smurf)
    .then(res => {
      dispatch({ type: EDIT_SMURF_SUCCESS, payload: res.data });
      return true;
    })
    .catch(err => {
      dispatch({ type: EDIT_SMURF_FAILURE, payload: err.response.data.Error });
      return false;
    });
};

export const deleteSmurf = smurfID => dispatch => {
  dispatch({ type: DELETE_SMURF_START });
  axios
    .delete(`${localHost}/smurfs/${smurfID}`)
    .then(res => {
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: DELETE_SMURF_FAILURE,
        payload: "error"
      });
    });
};
