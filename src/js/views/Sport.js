import React, { useState, useContext } from "react";
import { SportCard } from "../component/SportCard.js";
import { Context } from "../store/appContext";

import "../../styles/home.scss";

export function Sport() {
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
					<h1>Sport Games</h1>
					<br />
					<div className="row">
						{store.sports.map((sport, index) => (
							<SportCard key={index} index={index} sport={sport} />
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
