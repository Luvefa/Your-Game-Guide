import React, { useState, useContext } from "react";
import { RacingCard } from "../component/RacingCard.js";
import { Context } from "../store/appContext";

import "../../styles/home.scss";

export function Racing() {
	const { store, actions } = useContext(Context);
	// console.log(actions.getRacings());

	// if (store.gallerys.length == 0) {
	// 	test = "nothing to show";
	// } else {
	// 	test = (
	return (
		<div className="container">
			<div className="text-center mt-5">
				<h1>Racing Games</h1>
				<div className="row">
					{store.racings.map((racing, index) => (
						<RacingCard key={index} index={index} racing={racing} />
					))}
				</div>
			</div>
		</div>
	);
}
/* // return <div className="col text-center">{test}</div>;
// } */
