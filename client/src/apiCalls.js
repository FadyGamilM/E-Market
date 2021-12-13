import axios from "axios";

export const addToCartRequest = async (productID) => {
	const { data } = await axios.get(
		`/api/products/product-details/${productID}`
	);
	console.log("data from apicalls", data);
	if (localStorage.getItem("cartItems")) {
		const cartItemsFromLocal = JSON.parse(localStorage.getItem("cartItems"));
		const newItmes = [...cartItemsFromLocal, data];
		localStorage.setItem("cartItems", JSON.stringify(newItmes));
	} else {
		const items = [];
		items.push(data);
		localStorage.setItem("cartItems", JSON.stringify(items));
	}
};

export const PurchaseProducts = async (totalPrice, cartItemsIds) => {
	try {
		// get userInfo from localStorage
		const user = JSON.parse(localStorage.getItem("userInfo"));
		// make patch request to API with the id of this user you just fetched from localStorage
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		// receive from the request the updated user
		const { data } = await axios.patch(
			`/api/products/cart/${user.id}`,
			{
				totalPrice: totalPrice,
				cartItemsIds: cartItemsIds,
			},
			config
		);
		const { updatedUser, productsOwners } = data;
		console.log(
			"[apiCalls file] : After ",
			updatedUser,
			"purchased from ",
			productsOwners
		);
		// update the userInfo in localStorage
		localStorage.setItem("userInfo", JSON.stringify(updatedUser));
		localStorage.setItem("allUsers", JSON.stringify(productsOwners));
		localStorage.setItem("A", JSON.stringify(updatedUser));
		localStorage.setItem("B", JSON.stringify(productsOwners));
		RefreshLoggedInUserInfo(user.id);
	} catch (error) {
		console.log("[apiCalls file] : purchase api call", error);
	}
};

export const addNewProduct = async (newProduct) => {
	try {
		// get userInfo from localStorage
		const user = JSON.parse(localStorage.getItem("userInfo"));
		// setup the post request to /api/users/:uderID/product
		const userID = user.id;
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(
			`/api/users/${userID}/product`,
			newProduct,
			config
		);
		console.log("[apiCalls file] : after adding new product", data.data);
		// update the user in the localStorage
		const updatedUser = await (await axios.get(`/api/users/${user.id}`)).data;
		console.log(
			"[apiCalls file] : user after she added new product",
			updatedUser
		);
		localStorage.setItem("userInfo", JSON.stringify(updatedUser));
	} catch (error) {
		console.log("[apiCalls file] : Error while adding new product", error);
	}
};

// export const register = async (newUser) => {
// 	try {
// 		const config = {
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 		};
// 		const { data } = await axios.post("/api/auth/register", newUser, config);
// 		console.log("Data After Registeration", data);
// 		localStorage.setItem("userInfo", JSON.stringify(data));
// 	} catch (error) {
// 		console.log("error in registeration api", error);
// 	}
// };

// TODO => fetch all users
export const fetchAllUsers = async () => {
	try {
		const { data } = await axios.get("/api/users");
		// get rid of the current logged-in user from this list
		let loggedInUser = JSON.parse(localStorage.getItem("userInfo"));
		let allUsersExceptLoggedInUser = [];
		data.forEach((user) => {
			if (user._id !== loggedInUser.id) {
				allUsersExceptLoggedInUser.push(user);
			}
		});

		localStorage.setItem(
			"allUsers",
			JSON.stringify(allUsersExceptLoggedInUser)
		);
		console.log(
			"[apiCalls file] : all users except logged-in user, ",
			allUsersExceptLoggedInUser
		);
	} catch (error) {
		console.log(
			"[apiCalls file] : error while fetching all users from api",
			error
		);
	}
};

// TODO=> get specifc user
export const fetchUser = async (userID) => {
	try {
		const { data } = await axios.get(`/api/users/${userID}`);
		console.log("[apiCalls file] : this is the profile owner, ", data);
		localStorage.setItem("anotherUser", JSON.stringify(data));
		return data;
	} catch (error) {
		console.log(
			"[apiCalls file] : error while fetching user data from api",
			error
		);
	}
};

//TODO=> follow another user
export const followUser = async (followerID, followedID) => {
	try {
		const { data } = await axios.get(
			`/api/users/${followerID}/follow/${followedID}`
		);
		const { followerUser, followedUser } = data;

		followerUser["id"] = followerUser["_id"];
		followedUser["id"] = followedUser["_id"];
		delete followerUser["_id"];
		delete followedUser["_id"];

		console.log("[apiCalls file] : follower is ", followerUser);
		console.log("[apiCalls file] : followed is ", followedUser);

		localStorage.setItem("userInfo", JSON.stringify(followerUser));

		localStorage.setItem("anotherUser", JSON.stringify(followedUser));

		localStorage.setItem("A", JSON.stringify(followerUser));

		localStorage.setItem("B", JSON.stringify(followedUser));

		// localStorage.removeItem("userInfo");
		// localStorage.removeItem("anotherUser");
	} catch (error) {
		console.log("[apiCalls file] : error while following another user", error);
	}
};

//TODO=> login a registerd user
export const login = async (userCredential) => {
	try {
		console.log(
			"[apiCalls_file - login_API] : ",
			userCredential,
			"needs to login..."
		);
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(
			"/api/auth/login",
			userCredential,
			config
		);
		console.log(
			"[apiCalls_file - login_API] : current logged-in user is : ",
			data
		);
		localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		console.log(
			"[apiCalls_file - login_API] : error while logging-in user",
			error
		);
	}
};

// TODO=> register a new user
export const register = async (userCredential) => {
	try {
		console.log(
			"[apiCalls_file - register_API] : ",
			userCredential,
			"needs to register..."
		);
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(
			"/api/auth/register",
			userCredential,
			config
		);
		console.log(
			"[apiCalls_file - register_API] : current registered & logged-in user is : ",
			data
		);
		localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		console.log(
			"[apiCalls_file - register_API] : error while registering new user",
			error
		);
	}
};

export const RefreshLoggedInUserInfo = async (userID) => {
	try {
		const { data } = await axios.get(`/api/users/${userID}`);
		localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		console.log(
			"[apiCalls file] : error while refreshing logged-in user",
			error
		);
	}
};

// TODO=> fetch all products of specific category
export const fetchCategoryProducts = async (category) => {
	try {
		// get all products
		const allProducts = await axios.get(`/api/products/${category}`);
		// get logged-in user to filter his products before rednering
		const loggedInUser = JSON.parse(localStorage.getItem("userInfo"));
		// map throw the fetched products, if the product owner === loggedInUser, neglect this product
		console.log(
			"[apiCalls file] : all products under specific category",
			allProducts
		);
		// const filteredProducts = allProducts.filter(product=>{
		// 	if(product..)
		// })
	} catch (error) {
		console.log(
			"[apiCalls file] : error while fetching all products of ",
			category,
			" category"
		);
	}
};

// TODO=> deposite cach to your profile
export const depositeCachToYourAccount = async (userID, additionalCach) => {
	try {
		let newCach = 0;
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(
			`/api/users/${userID}/cach-deposite`,
			{
				cach: additionalCach,
			},
			config
		);
		newCach = Number(data);
		const loggedInUser = JSON.parse(localStorage.getItem("userInfo"));
		console.log("[apiCalls file] : user before adding cach, ", loggedInUser);
		let updatedLoggedInUser = { ...loggedInUser, cach: newCach };
		console.log(
			"[apiCalls file] : user before adding cach, ",
			updatedLoggedInUser
		);
		localStorage.setItem("userInfo", JSON.stringify(updatedLoggedInUser));
	} catch (error) {
		console.log("[apiCalls file]: error while deposite cach, ", error);
	}
};

// TODO=> show purchased products
export const fetchPurchasedProducts = async (userID) => {
	try {
		const { data } = await axios.get(`/api/products/user/${userID}`);
		console.log("[from api call]", userID);
		// set local
		const purchasedproducts = data.purchasedProducts;
		console.log("[from api call]", purchasedproducts);
		localStorage.setItem(
			"loggedInPurchasedProducts",
			JSON.stringify(purchasedproducts)
		);
	} catch (error) {
		console.log("[apiCalls] fetchPurchasedProducts api", error);
	}
};

// // TODO=> show offered products
// export const fetchPurchasedProducts = async (userID) => {
// 	try {
// 		const { data } = await axios.get(`/api/products/user/${userID}`);
// 		console.log("[from api call]", userID);
// 		// set local
// 		const purchasedproducts = data.offeredProducts;
// 		console.log("[from api call]", purchasedproducts);
// 		localStorage.setItem(
// 			"loggedInPurchasedProducts",
// 			JSON.stringify(purchasedproducts)
// 		);
// 	} catch (error) {
// 		console.log("[apiCalls] fetchPurchasedProducts api", error);
// 	}
// };
