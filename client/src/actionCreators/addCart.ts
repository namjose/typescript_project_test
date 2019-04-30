import { ItemStructure, ADD_CART, CartActionTypes } from "../types/types";

export default function addCart(newItem: ItemStructure): CartActionTypes {
  return {
    type: ADD_CART,
    payload: newItem
  };
}
