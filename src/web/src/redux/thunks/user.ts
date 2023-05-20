import { Dispatch } from 'redux';
import { getUser } from '../../api/index';
import { setUser, resetUser, User } from '../actions/user';

export const attemptGetUser = () => (dispatch: Dispatch) =>
  getUser()
    .then((response) => {
      console.log('got user response: ' + JSON.stringify(response?.data));
      if (response.data) {
        dispatch(setUser(response.data));
      } else {
        dispatch(resetUser());
      }
    })
    .catch(() => {
      dispatch(resetUser());
    });
