// //* import axios so when we receive item to add it to the cart, we fetch its data from /api/product/productDetails/:productID api
// import axios from "axios";

// import store from "../store";

// //* constants
// import {
// 	ADD_ITEM_TO_CART,
// 	REMOVE_ITEM_FROM_CART,
// } from "../constants/cartConstants";
// //* the action itself
// export const addToCart = (productID) => async (dispatch, getState) => {
// 	try {
// 		// get the entire product from api
// 		const { data } = await axios.get(
// 			`/api/products/product-details/${productID}`
// 		);
// 		console.log(data);
// 		//* dispatch the action so the payload is returned back to reducer and reducer will update the store state
// 		dispatch({
// 			type: ADD_ITEM_TO_CART,
// 			payload: data,
// 		});
// 		//* save it to localStorage
// 		localStorage.setItem(
// 			"cartItems",
// 			JSON.stringify(getState().cart.cartItems)
// 		);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

//* import axios so when we receive item to add it to the cart, we fetch its data from /api/product/productDetails/:productID api
import axios from "axios";

import store from "../store";

//* constants
import {
	ADD_ITEM_TO_CART,
	REMOVE_ITEM_FROM_CART,
} from "../constants/cartConstants";
//* the action itself
export const addToCart = (productID) => async (dispatch, getState) => {
	try {
		// get the entire product from api
		const { data } = await axios.get(
			`/api/products/product-details/${productID}`
		);
		console.log(data);
		//* dispatch the action so the payload is returned back to reducer and reducer will update the store state
		dispatch({
			type: ADD_ITEM_TO_CART,
			payload: data,
		});
		//* save it to localStorage
		localStorage.setItem(
			"cartItems",
			JSON.stringify(getState().cart.cartItems)
		);
	} catch (error) {
		console.log(error);
	}
};
