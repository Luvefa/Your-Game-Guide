import React, { useState } from "react";
import PropTypes from "prop-types";

export function LoginForm({ Login, error }) {
	const [details, setDetails] = useState({ name: "", email: "", password: "" });

	const submitHandler = e => {
		e.preventDefault();

		Login(details);
	};

	return (
		<form onSubmit={submitHandler} style={{ marginLeft: "300px", marginRight: "300px" }}>
			<div
				className="form-inner"
				style={{
					padding: "117px",
					paddingTop: "15px",
					paddingBottom: "15px",
					background: "none",
					marginTop: "216px",
					marginBottom: "226px"
				}}>
				<h2>Login</h2>
				{error != "" ? <div className="error">{error}</div> : ""}
				<div className="form-group" style={{ marginleft: "390px" }}>
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						name="name"
						id="name"
						onChange={e => setDetails({ ...details, name: e.target.value })}
						value={details.name}
					/>
				</div>
				<div className="form-group" style={{ marginleft: "390px" }}>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						name="email"
						id="email"
						onChange={e => setDetails({ ...details, email: e.target.value })}
						value={details.email}
					/>
				</div>
				<div className="form-group" style={{ marginleft: "390px" }}>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						name="password"
						id="password"
						onChange={e => setDetails({ ...details, password: e.target.value })}
						value={details.password}
					/>
				</div>
				<input type="submit" value="LOGIN" />
			</div>
		</form>
	);
}

LoginForm.propTypes = {
	Login: PropTypes.func,
	error: PropTypes.string
};
