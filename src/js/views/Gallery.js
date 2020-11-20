import React, { useState, useContext } from "react";
import { GalleryCard } from "../component/GalleryCard.js";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
export function Gallery() {
	const { store, actions } = useContext(Context);
	let test = "";
	// console.log(actions.getGallerys());

	if (store.gallerys.length == 0) {
		test = "nothing to show";
	} else {
		test = (
			<div className="container">
				<div className="text-center mt-5">
					<h1>All Games</h1>
					<div className="row">
						{store.gallerys.map((gallery, index) => (
							<GalleryCard
								key={index}
								index={index}
								// name={gallery.name}
								// genre={gallery.genre}
								// photo={gallery.photo}
								// console={gallery.console}
								// desc={gallery.desc}
								gallery={gallery}
							/>
						))}
					</div>
				</div>
				<br />
			</div>
		);
	}
	return <div className="col text-center">{test}</div>;
}
