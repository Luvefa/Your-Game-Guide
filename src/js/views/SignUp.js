import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import app from "../base.js";

export const SignUp = ({ history }) => {
	const handleSignUp = useCallback(
		async event => {
			event.preventDefault();
			const { email, password } = event.target.elements;
			try {
				await app.auth().createUserWithEmailAndPassword(email.value, password.value);
				// history.push("/");
				location.replace("/");
			} catch (error) {
				alert(error);
			}
		},
		[history]
	);
	return (
		<div className="container2">
			<form onSubmit={handleSignUp}>
				<div className="form-group">
					<h1>SignUp</h1>
					<input
						type="email"
						name="email"
						className="form-control"
						id="exampleInputEmail"
						area-describedby="emailhelp"
						placeholder="Add Email"
					/>
					<small id="emailHelp" className="form-text text-muted">
						{" Add Your Info"}
					</small>
				</div>
				<div className="form-group">
					<input
						type="password"
						name="password"
						className="form-control"
						id="exampleInputPassword"
						placeholder="Add Password"
					/>
					<button className="btn-1">SignUp</button>
				</div>
			</form>
		</div>
	);
};

SignUp.propTypes = {
	history: PropTypes.object
};
