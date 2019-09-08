import jwtDecode from 'jwt-decode';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGOUT,
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
} from '../actions/auth';

const token = localStorage.getItem('token');
const user = token && jwtDecode(token).user;

const initialState = {
  ...(token && { token }),
  ...(user && { user })
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      const user = jwtDecode(action.token).user;
      return {
        ...state,
        loading: false,
        token: action.token,
        user
      };

    case SIGNUP_ERROR:
    case LOGIN_ERROR:
      return { ...state, loading: false };

    case LOGOUT:
      return { ...state, token: null, user: null };

    default:
      return state;
  }
};

export function auth(state = {}, action = {}) {
  switch (action.type) {
      case USER_LOGGED_IN:
          return action.user;
      case USER_LOGGED_OUT:
          return {};
      default:
          return state;
  }
};