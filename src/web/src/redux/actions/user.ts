export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const SET_USER = 'SET_USER';
export const RESET_USER = 'RESET_USER';

export type User = {
  id: number;
  email: string;
  role: string;
};

export type UserToken = {
  token: string;
  user: User;
};

export type Credentials = {
  email: string;
  password: string;
};

export type UserAction<T> = {
  type: string;
  payload?: T;
};

export function login(userToken: UserToken): UserAction<User> {
  console.log('user:' + JSON.stringify(userToken));
  return {
    type: LOGIN_USER,
    payload: userToken.user
  };
}

export function logout(): UserAction<never> {
  return {
    type: LOGOUT_USER
  };
}

export function setUser(user: User): UserAction<User> {
  console.log('setting user:' + user);
  return {
    type: SET_USER,
    payload: user
  };
}

export function resetUser(): UserAction<never> {
  return { type: RESET_USER };
}
