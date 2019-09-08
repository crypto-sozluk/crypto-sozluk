import { login, signup } from '../util/api';
import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

const loginRequest = { type: LOGIN_REQUEST };
const loginSuccess = token => ({ type: LOGIN_SUCCESS, token });
const loginError = error => ({ type: LOGIN_ERROR, error });


export const attemptLogin = ( username, password ) => async dispatch => {
  dispatch(loginRequest);
  try {
    const token = await login(username, password);
    dispatch(loginSuccess(token));
  } catch (error) {
    dispatch(loginError(error));
  }
};

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

const signupRequest = { type: SIGNUP_REQUEST };
const signupSuccess = token => ({ type: SIGNUP_SUCCESS, token });
const signupError = error => ({ type: SIGNUP_ERROR, error });

//duzenleme
export const attemptSignup = (email, username, password) => async dispatch => {
  dispatch(signupRequest);
  try {
    const token = await signup(email, username, password);
    dispatch(signupSuccess(token));
  } catch (error) {
    dispatch(signupError(error));
  }
};

//sonradan
export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';
export const confirmAccount = token => dispatch =>
    axios.post('/api/auth/confirmation', { token })
        .then((res) => {
            localStorage.authToken = res.data.user.token;
            dispatch({
                type: USER_LOGGED_IN,
                user: res.data.user
            });
        });

export const resetPasswordRequest = ({ email }) => () =>
    axios.post('/api/auth/reset_password_request', { email });

export const validateToken = token => () =>
    axios.post('/api/auth/validate_token', { token });

export const resetPassword = data => () =>
    axios.post('/api/auth/reset_password', { data });

//sonradan end

export const LOGOUT = 'LOGOUT';
export const logout = () => ({ type: LOGOUT });
