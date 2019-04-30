import { TOGGLE_CART, CartActionTypes, CartInterface } from "../types/types";

export default function toggleCart(): CartActionTypes {
  return {
    type: TOGGLE_CART
  };
}
