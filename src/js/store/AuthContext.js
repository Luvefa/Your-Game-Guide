import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import app from "../base";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [pending, setPending] = useState(true);

	useEffect(() => {
		app.auth().onAuthStateChanged(user => {
			setCurrentUser(user);
			setPending(false);
		});
	}, []);
	if (pending) {
		return (
			<div className="text-center" style={{ padding: "200px" }}>
				<h1>Welcome To Your Game Guide</h1>
				<i className="fas fa-gamepad fa-5x" />
				{/* Loading...{" "} */}
			</div>
		);
	}

	return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
	children: propTypes.object
};
