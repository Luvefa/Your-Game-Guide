import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";

export const Signup = () => {
	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");

	// const [store, actions] = useContext(context);
	sessionStorage.clear();
	let handleSignup = e => {
		e.preventDefault();
		//email@email.com + Briz
		if (user === "" && pass === "") {
			sessionStorage.setItem("loggedIn", true);
			sessionStorage.setItem("user", user);
			renderRedirect();
		} else {
			return alert("WRONG EMAIL AND/OR NAME!");
		}
	};
	let renderRedirect = () => {
		location.replace("https://3000-d8974454-0d60-4f1d-888b-0628666ba0f0.ws-us02.gitpod.io/Gallery");
	};
	return (
		<div className="container">
			<form className="form" onSubmit={handleSignup}>
				<div className="form-group">
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail"
						area-describedby="emailhelp"
						placeholder="Add Email"
						onChange={e => setUser(e.target.value)}
					/>
					<small id="emailHelp" className="form-text text-muted">
						{" Add Your Info"}
					</small>
				</div>
				<div className="form-group">
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword"
						placeholder="Add Password"
						onChange={e => setPass(e.target.value)}
					/>
				</div>
				<div className="container">
					<button className="btn-1">Register</button>
				</div>
			</form>
		</div>
	);
};
