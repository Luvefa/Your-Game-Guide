import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import IMG from "../../img/IMG.png";

export const Navbar = props => {
	let action = "";
	// let loggedIn = sessionStorage.getItem("loggedIn");
	if (props.isAuth !== "true") {
		action = (
			<Link className="nav-link" to="/About/">
				<i className="fas fa-sign-in-alt fa-2x" />
			</Link>
		);
	} else {
		action = (
			<Link
				className="nav-link"
				onClick={() => {
					sessionStorage.clear();
					location.replace("https://3000-d8974454-0d60-4f1d-888b-0628666ba0f0.ws-us02.gitpod.io/");
				}}>
				<i className="far fa-times-circle fa-2x" />
			</Link>
		);
	}

	return (
		<div className="container-fluid">
			<nav
				className="navbar navbar-expand-lg "
				style={{ backgroundColor: "#edb704", textShadow: "2px 2px 5px black" }}>
				<Link className="navbar-brand" style={{ width: "30%" }} to="/">
					{/* <img src={IMG} className="card-img" alt="..." /> */}
					<div className="row">
						<h2>YOUR </h2>

						<h2>GAME </h2>

						<h2>GUIDE</h2>
					</div>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item ">
							<Link className="nav-link" to="/">
								<i className="fas fa-home fa-2x" />
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/Gallery/">
								<i className="fas fa-gamepad fa-2x" />
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/Signup">
								<i className="fas fa-user-plus fa-2x" />
							</Link>
						</li>
						<li className="nav-item">
							{action}
							{/* <Link className="nav-link" to="/About">
								<button>Login</button>
							</Link> */}
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

Navbar.propTypes = {
	isAuth: PropTypes.string
};
