import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

/* ------------------------- import productReducers ------------------------- */
import {
	productListReducer,
	productDetailsReducer,
} from "./reducers/productReducers";
/* -------------------------------------------------------------------------- */

/* --------------------------- import cartReducer --------------------------- */
import { cartReducer } from "./reducers/cartReducers";
/* -------------------------------------------------------------------------- */

/* --------------------------- import userReducers -------------------------- */
import {
	userLoginReducer,
	userRegisterReducer,
	anotherUserProfile,
} from "./reducers/userReducers";
/* -------------------------------------------------------------------------- */

const reducer = combineReducers({
	productList: productListReducer,
	cart: cartReducer,
	userLogin: userLoginReducer,
	productDetails: productDetailsReducer,
	userRegister: userRegisterReducer,
	anotherUserProfile: anotherUserProfile,
});

// if we need something to be loaded when redux store is loaded, we put it here (localStorage)
const cartItemsFromStorage = localStorage.getItem("cartItems")
	? JSON.parse(localStorage.getItem("cartItems"))
	: [];
const userInfoFromStorage = localStorage.getItem("userInfo")
	? JSON.parse(localStorage.getItem("userInfo"))
	: null;

const profileOwnerFromLocalStorage = localStorage.getItem("anotherUser")
	? JSON.parse(localStorage.getItem("anotherUser"))
	: null;

const initialState = {
	cart: {
		cartItmes: cartItemsFromStorage,
	},
	userLogin: {
		userInfo: userInfoFromStorage,
	},
	anotherUserProfile: {
		profileOwnerUser: profileOwnerFromLocalStorage,
	},
};

const middleware = [thunk];
const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
