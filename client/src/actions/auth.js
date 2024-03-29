import { forgotPassword, login, signup } from '../util/api';

//sonradan
export const FORGOT_REQUEST = 'FORGOT_REQUEST';
export const FORGOT_SUCCESS = 'FORGOT_SUCCESS';
export const FORGOT_ERROR = 'FORGOT_ERROR';

const forgotRequest = { type: FORGOT_REQUEST };
const forgotSuccess = token => ({ type: FORGOT_SUCCESS, token });
const forgotError = error => ({ type: FORGOT_ERROR, error });


export const forgotPasswordView = ( email ) => async dispatch => {
  dispatch(forgotRequest);
  try {
    const token = await forgotPassword(email);
    dispatch(forgotSuccess(token));
  } catch (error) {
    dispatch(forgotError(error));
  }
};

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



export const LOGOUT = 'LOGOUT';
export const logout = () => ({ type: LOGOUT });
