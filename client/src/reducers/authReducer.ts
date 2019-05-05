import { AuthState, AuthActionTypes, LOG_IN, LOG_OUT } from "../types/types";

export const initialState: AuthState = {
  isLogin: false
};

export default function authReducer(
  state = initialState,
  action: AuthActionTypes
) {
  switch (action.type) {
    case LOG_IN:
      // console.log(action.isLogin);
      return { ...state, isLogin: true };
    case LOG_OUT:
      return { ...state, isLogin: action.isLogin };
    default:
      return state;
  }
}
