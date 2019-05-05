import {
  ItemStructure,
  ADD_CART,
  DELETE_CART,
  TOGGLE_CART,
  CartActionTypes
} from "../types/types";

export function addCart(newItem: ItemStructure): CartActionTypes {
  return {
    type: ADD_CART,
    payload: newItem
  };
}

export function deleteCart(itemId: string): CartActionTypes {
  return {
    type: DELETE_CART,
    id: itemId
  };
}

export function toggleCart(): CartActionTypes {
  return {
    type: TOGGLE_CART
  };
}
