import React, { useContext, useCallback } from "react";
import { withRouter, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import app from "../base.js";
import { AuthContext } from "../store/AuthContext.js";
// import { Tabs, Tab, Card, Carousel, Button, Spinner } from "react-bootstrap";

export const Login = ({ history }) => {
	const handleLogin = useCallback(
		async event => {
			event.preventDefault();
			const { email, password } = event.target.elements;
			try {
				await app.auth().signInWithEmailAndPassword(email.value, password.value);
				// history.push("/");
				// location.replace("https://3000-d8974454-0d60-4f1d-888b-0628666ba0f0.ws-us02.gitpod.io/Gallery");
				location.replace("/Gallery");
			} catch (error) {
				alert(error);
			}
		},
		[history]
	);
	const { currentUser } = useContext(AuthContext);
	if (currentUser) {
		return <Redirect to="/Gallery" />;
	}

	return (
		<div className="container3">
			<form onSubmit={handleLogin}>
				<div className="form-group">
					<h1>Login</h1>
					<input
						type="email"
						name="email"
						className="form-control"
						id="exampleInputEmail"
						area-describedby="emailhelp"
						placeholder="Email"
					/>
					<small id="emailHelp" className="form-text text-muted">
						{" Info Secure"}
					</small>
				</div>
				<div className="form-group">
					<input
						type="password"
						name="password"
						className="form-control"
						id="exampleInputPassword"
						placeholder="Password"
					/>
					<button className="btn-1">Login</button>
				</div>
			</form>
		</div>
	);
};

Login.propTypes = {
	history: PropTypes.object
};
