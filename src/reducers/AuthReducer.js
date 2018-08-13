import {
  LOGIN_USER_FAIL,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: null };
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, ...INITIAL_STATE };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed', loading: false };
    default:
      return state;
  }
}
