import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";

import axios from "axios";

// action to list all products from specific category
export const listProducts = (category) => async (dispatch) => {
	console.log(category);
	try {
		dispatch({
			type: PRODUCT_LIST_REQUEST,
		});

		const { data } = await axios.get(`/api/products/${category}`);
		console.log(data);
		dispatch({
			type: PRODUCT_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: PRODUCT_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

// action to list all products from specific category
export const listProductDetails = (productID) => async (dispatch) => {
	console.log(productID);
	try {
		dispatch({
			type: PRODUCT_DETAILS_REQUEST,
		});

		const { data } = await axios.get(`/api/product-details/${productID}`);
		console.log(data);
		dispatch({
			type: PRODUCT_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: PRODUCT_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
