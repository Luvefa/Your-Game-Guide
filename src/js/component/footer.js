import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	// <div className="container">
	<footer className="footer mt-auto text-center">
		<div className="container flex text-center">
			<Link to="/">
				<i className="fas fa-gamepad fa-4x" />
			</Link>
		</div>
	</footer>
	// </div>
);
