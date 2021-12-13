// import {
// 	ADD_ITEM_TO_CART,
// 	REMOVE_ITEM_FROM_CART,
// } from "../constants/cartConstants";

// // to fetch all products of specific category
// export const cartReducer = (
// 	state = {
// 		cartItems: [],
// 	},
// 	action
// ) => {
// 	switch (action.type) {
// 		case ADD_ITEM_TO_CART:
// 			// action will return the whole product document at action.payload
// 			const cartItem = action.payload;
// 			console.log("Hello", cartItem);
// 			// check if its exist or not
// 			const exist = state.cartItems.find((item) => item.id === cartItem.id);
// 			if (exist) {
// 				return {
// 					...state,
// 					cartItems: state.cartItems.map((item) =>
// 						item.id === exist.id ? cartItem : item
// 					),
// 				};
// 			} else {
// 				return {
// 					...state,
// 					cartItems: [...state.cartItems, cartItem],
// 				};
// 			}

// 		case REMOVE_ITEM_FROM_CART:
// 			return {};

// 		default:
// 			return state;
// 	}
// };
import {
	ADD_ITEM_TO_CART,
	REMOVE_ITEM_FROM_CART,
} from "../constants/cartConstants";

// to fetch all products of specific category
export const cartReducer = (
	state = {
		cartItems: [],
	},
	action
) => {
	switch (action.type) {
		case ADD_ITEM_TO_CART:
			return state;

		case REMOVE_ITEM_FROM_CART:
			return state;

		default:
			return state;
	}
};
