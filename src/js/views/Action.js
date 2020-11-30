import React, { useState, useContext } from "react";
import { ActionCard } from "../component/ActionCard.js";
import { Context } from "../store/appContext";

import "../../styles/home.scss";

export function Action() {
	const { store, actions } = useContext(Context);
	let test = "";

	let isAuth = sessionStorage.getItem("loggedIn");

	if (isAuth == "true") {
		if (store.gallerys.length == 0) {
			test = "nothing to show";
		} else {
			test = (
				<div className="container">
					<div className="text-center mt-5">
						<h1>Action Games</h1>
						<br />
						<div className="row">
							{store.actions.map((action, index) => (
								<ActionCard key={index} index={index} action={action} />
							))}
						</div>
					</div>
				</div>
			);
		}
	} else {
		location.replace("https://3000-d8974454-0d60-4f1d-888b-0628666ba0f0.ws-us02.gitpod.io/About");
	}
	return <div className="col text-center">{test}</div>;
}
