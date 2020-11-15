import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export function GalleryProfile() {
	const { store, actions } = useContext(Context);
	// use params gives us access to the URL variable id
	let params = useParams();
	// use history gives us access to go back to the last page
	let history = useHistory();

	let gallery = actions.getGallery(params.id);
	console.log(gallery);

	return (
		<div className="container">
			<div className="card-group">
				<div
					className="card text-center"
					style={{ backgroundColor: "black", color: "white", marginTop: "25px" }}>
					<h1>{gallery.name}</h1>
				</div>
				<div className="container" style={{ border: "none ", backgroundColor: "black" }}>
					<img
						src={gallery.photo}
						className="card-img-top"
						alt="..."
						style={{ width: "100%", margin: "auto", padding: "1.25rem" }}
					/>
					<div className="row">
						{/* margin: "auto ",  */}
						<div className="card-body col-6" style={{ color: "white" }}>
							<h5 className="card-title">
								<strong>{gallery.name}</strong>
							</h5>
							<p className="card-text">
								<strong>
									Console:
									{gallery.console}
								</strong>{" "}
							</p>
							<p className="card-text">
								<strong>
									Genre:
									{gallery.genre}
								</strong>{" "}
							</p>
							<p className="card-text">
								<strong>Publisher:</strong> {gallery.publisher}
							</p>
							<p className="card-text">
								<strong>Rating:</strong> {gallery.ratings}
							</p>
							<p className="card-text">{gallery.desc}</p>
						</div>
						<div className="col-6">
							<iframe
								src={gallery.video}
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								style={{ width: 500, height: 250 }}
								allowFullScreen
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
