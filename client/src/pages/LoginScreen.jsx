// //! import useState to hold form fields into states
// import React, { useEffect, useState } from "react";

// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../actions/userActions";

// // import axios from "axios";

// const LoginScreen = () => {
// 	/* ------------------------- form fields into states ------------------------ */
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");
// 	/* -------------------------------------------------------------------------- */
// 	let navigate = useNavigate();
// 	const dispatch = useDispatch();
// 	// get part of the state 
// 	const userLogin = useSelector(state=>state.userLogin);
// 	const {loading, error, userInfo} = userLogin;
// 	if(userInfo) {
// 		console.log("yes")
// 	}

// 	/* ----------------- if we already login, we should redierct ---------------- */
// 	//* if we aren't logged-in, userInfo is defined by null, else we will find something
// 	useEffect(() => {
// 		if (userInfo) {
// 			navigate("/");
// 		}
// 	}, [userInfo, navigate]);
// 	/* -------------------------------------------------------------------------- */

// 	function handleLogin(e) {
// 		e.preventDefault();
// 		//* dispatch the action
// 		dispatch(login(email, password))
	
// 	}

// 	return (
// 		<div className="text-center justify-center mt-10">
// 			<h1 className="font-semibold text-xl py-2">Login</h1>

// 			<div className="text-center content-center justify-center flex">
// 				<form onSubmit={(e) => handleLogin(e)} className="flex flex-col gap-4">
// 					<input
// 						required
// 						className="border-purple-200 border-2 p-2 text-lg focus:outline-none rounded-lg"
// 						type="email"
// 						placeholder="Email"
// 						value={email}
// 						onChange={(e) => setEmail(e.target.value)}
// 					/>

// 					<input
// 						required
// 						className="border-purple-200 border-2 p-2 text-lg focus:outline-none rounded-lg"
// 						type="text"
// 						placeholder="Password"
// 						value={password}
// 						onChange={(e) => setPassword(e.target.value)}
// 					/>

// 					<div className="flex justify-center">
// 						<button
// 							type="submit"
// 							className=" transform transition hover:scale-110  bg-gradient-to-r from-pink-600 to to-purple-700 p-2 flex justify-center rounded-xl text-white font-semibold"
// 						>
// 							Login
// 						</button>
// 					</div>
// 					<div>
// 						<p className="text-lg font-semibold">
// 							Don't have an account ?{" "}
// 							<Link to="/register" className="ml-2">
// 								<button className=" text-purple-700 text-2xl font-semibold transform transition hover:scale-110 ">
// 									Create new account
// 								</button>
// 							</Link>
// 						</p>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };

// export default LoginScreen;

// // //! import useState to hold form fields into states
// // import React, { useEffect, useState } from "react";

// // import { Link, useNavigate } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import { login } from "../actions/userActions";

// // // import axios from "axios";

// // // const LoginScreen = () => {
// // // 	/* ------------------------- form fields into states ------------------------ */
// // // 	const [email, setEmail] = useState("");
// // // 	const [password, setPassword] = useState("");
// // // 	/* -------------------------------------------------------------------------- */
// // // 	let navigate = useNavigate();
// // // 	const dispatch = useDispatch();
// // // 	// get part of the state 
// // // 	const userLogin = useSelector(state=>state.userLogin);
// // // 	const {loading, error, userInfo} = userLogin;
// // // 	if(userInfo) {
// // // 		console.log("yes")
// // // 	}

// // // 	/* ----------------- if we already login, we should redierct ---------------- */
// // // 	//* if we aren't logged-in, userInfo is defined by null, else we will find something
// // // 	useEffect(() => {
// // // 		if (userInfo) {
// // // 			navigate("/");
// // // 		}
// // // 	}, [userInfo, navigate]);
// // // 	/* -------------------------------------------------------------------------- */

// // // 	function handleLogin(e) {
// // // 		e.preventDefault();
// // // 		//* dispatch the action
// // // 		dispatch(login(email, password))
	
// // // 	}

// // // 	return (
// // // 		<div className="text-center justify-center mt-10">
// // // 			<h1 className="font-semibold text-xl py-2">Login</h1>

// // // 			<div className="text-center content-center justify-center flex">
// // // 				<form onSubmit={(e) => handleLogin(e)} className="flex flex-col gap-4">
// // // 					<input
// // // 						required
// // // 						className="border-purple-200 border-2 p-2 text-lg focus:outline-none rounded-lg"
// // // 						type="email"
// // // 						placeholder="Email"
// // // 						value={email}
// // // 						onChange={(e) => setEmail(e.target.value)}
// // // 					/>

// // // 					<input
// // // 						required
// // // 						className="border-purple-200 border-2 p-2 text-lg focus:outline-none rounded-lg"
// // // 						type="text"
// // // 						placeholder="Password"
// // // 						value={password}
// // // 						onChange={(e) => setPassword(e.target.value)}
// // // 					/>

// // // 					<div className="flex justify-center">
// // // 						<button
// // // 							type="submit"
// // // 							className=" transform transition hover:scale-110  bg-gradient-to-r from-pink-600 to to-purple-700 p-2 flex justify-center rounded-xl text-white font-semibold"
// // // 						>
// // // 							Login
// // // 						</button>
// // // 					</div>
// // // 					<div>
// // // 						<p className="text-lg font-semibold">
// // // 							Don't have an account ?{" "}
// // // 							<Link to="/register" className="ml-2">
// // // 								<button className=" text-purple-700 text-2xl font-semibold transform transition hover:scale-110 ">
// // // 									Create new account
// // // 								</button>
// // // 							</Link>
// // // 						</p>
// // // 					</div>
// // // 				</form>
// // // 			</div>
// // // 		</div>
// // // 	);
// // // };

// // // export default LoginScreen;

//! import useState to hold form fields into states
import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { login } from "../actions/userActions";
import { login } from "../apiCalls";
// import axios from "axios";

const LoginScreen = () => {

	let userLogin = useSelector(state=>state.userLogin);
	let {userInfo} = userLogin;

	/* ------------------------- form fields into states ------------------------ */
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	/* -------------------------------------------------------------------------- */
	let navigate = useNavigate();
	// // // let userInfo = localStorage.getItem('userInfo')?
	// // // JSON.parse(localStorage.getItem('userInfo')):null;
	// // // console.log("[LoginScreen Component] : ",userInfo);
	if(userInfo) {
		console.log("yes")
	}else{
		console.log("no user is logged-in")
	}

	/* ----------------- if we already login, we should redierct ---------------- */
	//* if we aren't logged-in, userInfo is defined by null, else we will find something
	useEffect(() => {
		if (userInfo) {
window.location.href = "/"		
}else{
	localStorage.removeItem("allUsers");
	localStorage.removeItem("anotherUser");
}
		// setUserInfo(JSON.parse(localStorage.getItem("userInfo")) || null); 

	}, [userInfo]);

	/* -------------------------------------------------------------------------- */

	function handleLogin(e) {
		e.preventDefault();
		//* dispatch the action
		if(email && password){
			login({email, password});
			userInfo = (JSON.parse(localStorage.getItem("userInfo")));
			if(userInfo){
				window.location.href = "/"
			}
		}
	}

	return (
		<div className="text-center justify-center mt-10">
			<h1 className="font-semibold text-xl py-2">Login</h1>


			<div className="text-center content-center justify-center flex">
				<form onSubmit={(e) => handleLogin(e)} className="flex flex-col gap-4">
					<input
						required
						className="border-purple-200 border-2 p-2 text-lg focus:outline-none rounded-lg"
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<input
						required
						className="border-purple-200 border-2 p-2 text-lg focus:outline-none rounded-lg"
						type="text"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<div className="flex justify-center">
						<button
							type="submit"
							className=" transform transition hover:scale-110  bg-gradient-to-r from-pink-600 to to-purple-700 p-2 flex justify-center rounded-xl text-white font-semibold"
						>
							Login
						</button>
					</div>
					<div>
						<p className="text-lg font-semibold">
							Don't have an account ?{" "}
							<Link to="/register" className="ml-2">
								<button className=" text-purple-700 text-2xl font-semibold transform transition hover:scale-110 ">
									Create new account
								</button>
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginScreen;
