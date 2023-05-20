import { Credentials, User } from 'src/redux/actions/user';
import http from '../services/httpService';

const postLogin = (credentials: Credentials) => {
  console.log('logging in ' + JSON.stringify(credentials));

  return http.post('/auth/login', { ...credentials });
};

const sendResetPasswordLink = (email: string) =>
  http.post('/auth/login/forgot', { email });

const resetPassword = (password: string, token: string) =>
  http.post<void>(`/auth/login/reset/${token}`, { password });

const postLogout = () => http.post<void>('/auth/logout');

const postUser = (user: User) => http.post<void>('/user/register', user);

const getConfirmation = (token: string) => http.get<void>(`/auth/confirmation/${token}`);

const resendConfirmation = (email: string) =>
  http.post<void>('/auth/send-confirmation', { email });

const resetRegister = (email: string) =>
  http.post<void>('/user/register/cancel', { email });

const getUser = () => http.get('/users/me');

export {
  postLogin,
  sendResetPasswordLink,
  resetPassword,
  postLogout,
  postUser,
  getConfirmation,
  resendConfirmation,
  getUser,
  resetRegister
};
