import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function GalleryCard(props) {
	const { store, actions } = useContext(Context);
	return (
		<Link
			to={{
				pathname: "/GalleryProfile/" + props.gallery.id
			}}
			className="col-md-4">
			<div
				className="card mb-4 shadow-sm"
				style={{
					width: "25%",
					// marginLeft: "200px",
					border: "3px solid",
					boxShadow: "unset",
					padding: "15px",
					border: "none",
					backgroundColor: "black",
					flexWrap: "wrap"
				}}>
				<img src={props.gallery.photo} className="card-img-top" style={{ width: "500%" }} />
				<div className="card-body">
					<p className="card-text">{props.gallery.name}</p>
				</div>
			</div>
		</Link>
	);
}

GalleryCard.propTypes = {
	gallery: PropTypes.object
};
