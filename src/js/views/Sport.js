import React, { useState, useContext } from "react";
import { SportCard } from "../component/SportCard.js";
import { Context } from "../store/appContext";

import "../../styles/home.scss";

export function Sport() {
	const { store, actions } = useContext(Context);
	// console.log(actions.getSports());

	// if (store.gallerys.length == 0) {
	// 	test = "nothing to show";
	// } else {
	// 	test = (
	return (
		<div className="container">
			<div className="text-center mt-5">
				<h1>Sport Games</h1>
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
// return <div className="col text-center">{test}</div>;
// }
