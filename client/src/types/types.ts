export interface ItemStructure {
  id: string;
  name: string;
  color: string;
  brand: string;
  gender: string;
  price: number;
  discount: number;
}

export interface CartInterface {
  showCartDrawer: false;
  purchasedItem: ItemStructure[];
  total: number;
}
//interface CartState extends CartInterface{}

export const ADD_CART = "ADD_CART";
export const DELETE_CART = "DELETE_CART";
export const TOGGLE_CART = "TOGGLE_CART";

interface AddToCart {
  type: typeof ADD_CART;
  payload: ItemStructure;
}

interface DeleteFromCart {
  type: typeof DELETE_CART;
  id: string;
}

interface ToggleCart {
  type: typeof TOGGLE_CART;
}

export type CartActionTypes = AddToCart | DeleteFromCart | ToggleCart;
