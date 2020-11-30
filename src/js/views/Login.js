import React, { useState } from "react";
//import { Header } from "../component/Header.js";
import { Footer } from "../component/footer.js";
//import PropTypes from "prop-types";
import { LoginForm } from "../component/LoginForm.js";
import { Redirect } from "react-router-dom";
import "../../styles/home.scss";

export function Login() {
	const adminUser = {
		email: "admin@admin.com",
		email: "luis@luis.com",
		password: "admin123",
		password: "luis123"
	};

	const [user, setUser] = useState({ name: "", email: "" });
	const [error, setError] = useState("");
	const [redirect, setRedirect] = useState(false);

	const Login = details => {
		console.log(details);

		if (details.email == adminUser.email && details.password == adminUser.password) {
			console.log("Logged in");

			setUser({
				name: details.name,
				email: details.email
			});
			setRedirect(true);
		} else {
			// console.log("Details do not match!");
			setError("Details do not match!");
		}
	};

	const Logout = () => {
		setUser({ name: "", email: "" });
	};
	let renderRedirect = () => {
		if (redirect) {
			return <Redirect to="/Gallery" />;
		}
	};

	return (
		<div className="container">
			{/* <Header /> */}
			<div className="text-center mt-5">
				{user.email != "" ? (
					<div className="welcome" style={{ color: "white" }}>
						<h2>
							Welcome, <span>{user.name}</span>
						</h2>
						<button onClick={Logout}>Logout</button>
					</div>
				) : (
					<LoginForm Login={Login} error={error} />
				)}
			</div>
			{renderRedirect()}
			<Footer />
		</div>
	);
}
