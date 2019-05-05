export interface FilterInterface {
  gender: { key: string; value: boolean }[];
  brand: { key: string; value: boolean }[];
  color: { key: string; value: boolean }[];
}

export interface User {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  discount: string;
  payment: {
    card_number: string;
    expDate: string;
    cvv: string;
  };
  shippingAddres: {
    address: string;
    suburb: string;
    state: string;
    postcodes: string;
  };
}

export interface ItemStructure {
  id: string;
  name: string;
  color: string;
  brand: string;
  gender: string;
  price: number;
  discount: number;
  img: string;
}

export interface CartInterface {
  showCartDrawer: boolean;
  purchasedItem: ItemStructure[];
  total: number;
}
//interface CartState extends CartInterface{}

export interface AuthState {
  isLogin: boolean;
}

export const ADD_CART = "ADD_CART";
export const DELETE_CART = "DELETE_CART";
export const TOGGLE_CART = "TOGGLE_CART";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

interface LogIn {
  type: typeof LOG_IN;
  isLogin: boolean;
}

interface LogOut {
  type: typeof LOG_OUT;
  isLogin: boolean;
}

export type AuthActionTypes = LogIn | LogOut;

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
