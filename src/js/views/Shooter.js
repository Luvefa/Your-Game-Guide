import React, { useState, useContext } from "react";
import { ShooterCard } from "../component/ShooterCard.js";
import { Context } from "../store/appContext";

import "../../styles/home.scss";

export function Shooter() {
	const { store, actions } = useContext(Context);
	let test = "";
	// let isAuth = sessionStorage.getItem("loggedIn");

	// if (isAuth == "true") {
	if (store.gallerys.length == 0) {
		test = "nothing to show";
	} else {
		test = (
			<div className="container-fluid1">
				<div className="text-center mt-5">
					<h1>Shooter Games</h1>
					<br />
					<div className="row">
						{store.shooters.map((shooter, index) => (
							<ShooterCard key={index} index={index} shooter={shooter} />
						))}
					</div>
				</div>
				<br />
			</div>
		);
	}
	// } else {
	// 	location.replace("https://3000-d8974454-0d60-4f1d-888b-0628666ba0f0.ws-us02.gitpod.io/Login");
	// }
	return <div className="col text-center">{test}</div>;
}
