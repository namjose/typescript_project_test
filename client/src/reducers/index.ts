import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import authReducer from "./authReducer";
import { AuthState, CartInterface } from "../types/types";

// The top-level state object
export interface ApplicationState {
  cart: CartInterface;
  auth: AuthState;
}

export const rootReducer = combineReducers<ApplicationState>({
  cart: cartReducer,
  auth: authReducer
});
