import {
  GET_USERS,
  USERS_ERROR,
  ADD_USER,
  DELETE_USER,
} from '../actions/types';
import axios from 'axios';

// Get users
export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get('/users');

    dispatch({ type: GET_USERS, payload: res.data });
  } catch (err) {
    dispatch({ type: USERS_ERROR, payload: err.response.data });
  }
};

// Add user
export const addUser = (user) => async (dispatch) => {
  try {
    const res = await axios.post('/users', user);

    dispatch({ type: ADD_USER, payload: res.data });
  } catch (err) {
    dispatch({ type: USERS_ERROR, payload: err.response.data });
  }
};

// Delete user
export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`/users/${id}`);

    dispatch({ type: DELETE_USER, payload: id });
  } catch (err) {
    dispatch({ type: USERS_ERROR, payload: err.response.data });
  }
};
