// //! import useState to hold form fields into states
// import React, { useEffect, useState } from "react";

// import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

// import axios from "axios";
// // import { register } from "../actions/userActions";
// import { register } from "../apiCalls";

// const RegisterScreen = () => {
// 	// const dispatch = useDispatch();
// 	// const userRegister = useSelector((state) => state.userRegister);
// 	// const { loading, error, userInfo } = userRegister;
// 	const userInfo = JSON.parse(localStorage.getItem("userInfo"));
// 	//! ------------------------- form fields into states ------------------------ */
// 	const [username, setUsername] = useState("");
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");
// 	const [confirmPassword, setConfirmPassword] = useState("");
// 	const [region, setRegion] = useState("");
// 	const [message, seTmessage] = useState("");
// 	//! -------------------------------------------------------------------------- */

// 	//! const redirect = location.search ? location.search.split("=")[1] : "/";
// 	let navigate = useNavigate();

// 	//! ----------------- if we already login, we should redierct ---------------- */
// 	//* if we aren't logged-in, userInfo is defined by null, else we will find something
// 	useEffect(() => {
// 		if (userInfo) {
// 			window.location.href = "/";
// 		}
// 	}, [navigate]);
// 	//! -------------------------------------------------------------------------- */

// 	function handleRegister(e) {
// 		e.preventDefault();
// 		//* check the confirm pass matches the pass
// 		if (password !== confirmPassword) {
// 			seTmessage("Passwords do not match");
// 		} else {
// 			register({ username, email, password, region });
// 			navigate("/");
// 		}
// 	}
// 	return (
// 		<div className="text-center mt-5">
// 			<h1 className="text-3xl font-semibold py-2">registeration form</h1>
// 			<div className="flex justify-center content-center">
// 				{message && <h1>{message}</h1>}
// 				<form
// 					onSubmit={(e) => handleRegister(e)}
// 					className="flex flex-col gap-4"
// 				>
// 					<input
// 						required
// 						className="border-purple-200 border-2 p-2 text-lg focus:outline-none rounded-lg"
// 						placeholder="Username"
// 						type="text"
// 						value={username}
// 						onChange={(e) => setUsername(e.target.value)}
// 					/>

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

// 					<input
// 						required
// 						className="border-purple-200 border-2 p-2 text-lg focus:outline-none rounded-lg"
// 						type="text"
// 						placeholder="confirm password"
// 						value={confirmPassword}
// 						onChange={(e) => setConfirmPassword(e.target.value)}
// 					/>

// 					<input
// 						required
// 						className="border-purple-200 border-2 p-2 text-lg focus:outline-none rounded-lg"
// 						type="text"
// 						placeholder="region"
// 						value={region}
// 						onChange={(e) => setRegion(e.target.value)}
// 					/>

// 					<div className="flex justify-center">
// 						<button
// 							type="submit"
// 							className=" transform transition hover:scale-110  bg-gradient-to-r from-pink-600 to to-purple-700 p-2 flex justify-center rounded-xl text-white font-semibold"
// 						>
// 							Register
// 						</button>
// 					</div>
// 					<div>
// 						<p className="text-lg font-semibold">
// 							Already has an account ?{" "}
// 							<Link to="/login" className="ml-2">
// 								<button className=" text-purple-700 text-2xl font-semibold transform transition hover:scale-110 ">
// 									Login
// 								</button>
// 							</Link>
// 						</p>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };

// export default RegisterScreen;

//! import useState to hold form fields into states
import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";
// import { register } from "../actions/userActions";
import { login, register, fetchAllUsers } from "../apiCalls";

const RegisterScreen = () => {
	let userInfo = localStorage.getItem("userInfo")
		? JSON.parse(localStorage.getItem("userInfo"))
		: null;
	//! ------------------------- form fields into states ------------------------ */
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [region, setRegion] = useState("");
	const [message, seTmessage] = useState("");
	//! -------------------------------------------------------------------------- */

	//! const redirect = location.search ? location.search.split("=")[1] : "/";
	let navigate = useNavigate();

	//! ----------------- if we already login, we should redierct ---------------- */
	//* if we aren't logged-in, userInfo is defined by null, else we will find something
	useEffect(() => {
		if (userInfo) {
			window.location.href = "/";
		}
	}, [navigate]);
	//! -------------------------------------------------------------------------- */

	function handleRegister(e) {
		e.preventDefault();
		//* check the confirm pass matches the pass
		if (password !== confirmPassword) {
			seTmessage("Passwords do not match");
		} else {
			if (username && email && password && region) {
				if (region === "Europe" || region === "Middle East") {
					alert('Please choose the input region by "Europe" or "Middle East" ');
				}
				register({ username, email, password, region });
				// login({ email, password });
				window.location.href = "/";
				userInfo = JSON.parse(localStorage.getItem("userInfo"));
				console.log(
					"[RegisterScreen componenet] : after user registerd, ",
					userInfo
				);
			}
		}
	}
	return (
		<div className="text-center mt-5">
			<h1 className="text-3xl font-semibold py-2">registeration form</h1>
			<div className="flex justify-center content-center">
				{message && <h1>{message}</h1>}
				<form
					onSubmit={(e) => handleRegister(e)}
					className="flex flex-col gap-4"
				>
					<input
						required
						className="border-purple-200 border-2 p-2 text-lg focus:outline-none rounded-lg"
						placeholder="Username"
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>

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

					<input
						required
						className="border-purple-200 border-2 p-2 text-lg focus:outline-none rounded-lg"
						type="text"
						placeholder="confirm password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>

					<input
						required
						className="border-purple-200 border-2 p-2 text-lg focus:outline-none rounded-lg"
						type="text"
						placeholder="region"
						value={region}
						onChange={(e) => setRegion(e.target.value)}
					/>
					{/* 
					<select
						required
						onChange={(e) => setRegion(e.target.value)}
						className="border-purple-200 border-2 p-2 text-lg focus:outline-none rounded-lg"
					>
						<option value={"Europe"}>Europe</option>

						<option value={"Middle East"}>Middle East</option>
					</select> */}

					<div className="flex justify-center">
						<button
							type="submit"
							className=" transform transition hover:scale-110  bg-gradient-to-r from-pink-600 to to-purple-700 p-2 flex justify-center rounded-xl text-white font-semibold"
						>
							Register
						</button>
					</div>
					<div>
						<p className="text-lg font-semibold">
							Already has an account ?{" "}
							<Link to="/login" className="ml-2">
								<button className=" text-purple-700 text-2xl font-semibold transform transition hover:scale-110 ">
									Login
								</button>
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RegisterScreen;
