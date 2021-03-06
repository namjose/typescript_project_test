import {
  ADD_CART,
  DELETE_CART,
  CartActionTypes,
  CartInterface,
  TOGGLE_CART
} from "../types/types";

export const initialState: CartInterface = {
  showCartDrawer: false,
  purchasedItem: [
    {
      id: "100",
      name: "ULTRABOOST",
      color: "red",
      brand: "adidas",
      gender: "male",
      price: 250,
      discount: 0.5,
      img: "1"
    }
  ],
  total: 250 * 0.5
};

export default function cartReducer(
  state = initialState,
  action: CartActionTypes
) {
  switch (action.type) {
    case ADD_CART:
      let discountPrice = action.payload.price * action.payload.discount;
      console.log(state);
      return {
        ...state,
        purchasedItem: [...state.purchasedItem, action.payload],
        total: state.total + discountPrice
      };

    case DELETE_CART:
      let itemToRemove = state.purchasedItem.find(
        item => item.id === action.id
      );
      let newItems = state.purchasedItem.filter(item => item.id !== action.id);
      let newTotal = state.total - itemToRemove.price * itemToRemove.discount;
      return {
        ...state,
        purchasedItem: newItems,
        total: newTotal
      };

    case TOGGLE_CART:
      return {
        ...state,
        showCartDrawer: !state.showCartDrawer
      };
    default:
      return state;
  }
}
