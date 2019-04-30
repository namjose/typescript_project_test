import { DELETE_CART, CartActionTypes } from "../types/types";

export default function deleteCart(itemId: string): CartActionTypes {
  return {
    type: DELETE_CART,
    id: itemId
  };
}
