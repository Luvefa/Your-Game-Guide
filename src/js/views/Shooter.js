import React, { useState, useContext } from "react";
import { ShooterCard } from "../component/ShooterCard.js";
import { Context } from "../store/appContext";

import "../../styles/home.scss";

export function Shooter() {
	const { store, actions } = useContext(Context);
	// console.log(actions.getShooters());

	// if (store.gallerys.length == 0) {
	// 	test = "nothing to show";
	// } else {
	// 	test = (
	return (
		<div className="container">
			<div className="text-center mt-5">
				<h1>Shooter Games</h1>
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
// return <div className="col text-center">{test}</div>;
// }
