import {
  GET_USERS,
  USERS_ERROR,
  ADD_USER,
  DELETE_USER,
} from '../actions/types';

const initialState = {
  users: null,
  error: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, payload],
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== payload),
      };
    case USERS_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
