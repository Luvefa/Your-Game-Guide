import React, { useState, useContext } from "react";
import { ActionCard } from "../component/ActionCard.js";
import { Context } from "../store/appContext";

import "../../styles/home.scss";

export function Action() {
	const { store, actions } = useContext(Context);
	console.log(actions.getActions());

	// if (store.gallerys.length == 0) {
	// 	test = "nothing to show";
	// } else {
	// 	test = (
	return (
		<div className="container">
			<div className="text-center mt-5">
				<h1>Action Games</h1>
				<div className="row">
					{store.actions.map((action, index) => (
						<ActionCard key={index} index={index} action={action} />
					))}
				</div>
			</div>
			<br />
		</div>
	);
}
// return <div className="col text-center">{test}</div>;
// }
