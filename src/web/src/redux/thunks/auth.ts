import { Credentials, login, logout, User } from '../actions/user';
import { Dispatch } from 'redux';

import {
  postUser,
  postLogin,
  postLogout,
  getConfirmation,
  resendConfirmation,
  resetRegister,
  sendResetPasswordLink,
  resetPassword
} from '../../api/index';
import { NavigateFunction } from 'react-router';
import { toast } from 'react-toastify';

export const attemptLogin =
  (credentials: Credentials, navigate: NavigateFunction) => (dispatch: Dispatch) =>
    postLogin(credentials)
      .then(({ data }) => {
        console.log('logged in ' + JSON.stringify(data));
        dispatch(login(data));
        toast.success('Logged in ' + data.user.email, {
          position: 'top-center',
          hideProgressBar: true,
          closeOnClick: true,
          progress: undefined,
          theme: 'light'
        });
        navigate('/dashboards/overview', { replace: true });
      })
      .catch((e) => {
        toast.error(e.message, {
          position: 'top-center',
          hideProgressBar: true,
          closeOnClick: true,
          progress: undefined,
          theme: 'light'
        });
      });

export const attemptSendResetPasswordLink = (email: string, navigate: NavigateFunction) =>
  sendResetPasswordLink(email).then(() => {
    navigate('/login/forgot', { replace: true });
  });

export const attemptResetPassword = (
  password: string,
  token: string,
  navigate: NavigateFunction
) =>
  resetPassword(password, token)
    .then(() => {
      navigate('/login', { replace: true });
    })
    .catch(() => {
      navigate(`/login/reset/${token}`, { replace: true });
    });

export const attemptLogout = (navigate: NavigateFunction) => (dispatch: Dispatch) =>
  postLogout()
    .then(() => {
      dispatch(logout());
    })
    .finally(() => {
      navigate('/login', { replace: true });
    });

export const attemptRegister = (newUser: User) => () => postUser(newUser);

export const attemptGetConfirmation =
  (token: string, navigate: NavigateFunction) => (dispatch: Dispatch) =>
    getConfirmation(token).then(() => {
      navigate('/login', { replace: true });
    });

export const attemptResendConfirmation =
  (email: string, navigate: NavigateFunction) => (dispatch: Dispatch) =>
    resendConfirmation(email).catch(() => {
      navigate('/register', { replace: true });
    });

export const attemptResetRegister =
  (email: string, navigate: NavigateFunction) => (dispatch: Dispatch) =>
    resetRegister(email).catch(() => {
      navigate('/register', { replace: true });
    });
