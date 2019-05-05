import { createStore, compose, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import { ApplicationState, rootReducer } from "../reducers";
import { initialState as cartInitialState } from "../reducers/cartReducer";
import { initialState as authInitialState } from "../reducers/authReducer";

export const history = createBrowserHistory();

const initialState: ApplicationState = {
  cart: cartInitialState,
  auth: authInitialState
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

// console.log(store.getState());

// const unsubscribe = store.subscribe(() => console.log(store.getState()));

// store.dispatch(logIn());

// unsubscribe();
// const unsubscribe = store.subscribe(() => console.log(store.getState()));

// store.dispatch(logIn());

// // Stop listening to state updates
// unsubscribe();

export default store;
