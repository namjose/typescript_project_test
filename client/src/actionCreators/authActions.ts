import { LOG_IN, LOG_OUT, AuthActionTypes } from "../types/types";

export function logIn(): AuthActionTypes {
  return {
    type: LOG_IN,
    isLogin: true
  };
}

export function logOut(): AuthActionTypes {
  return {
    type: LOG_OUT,
    isLogin: false
  };
}
