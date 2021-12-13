import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
