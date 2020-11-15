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
			className="card text-center"
			style={{
				width: "25%",
				// marginLeft: "200px",
				border: "3px solid",
				boxShadow: "unset",
				padding: "15px",
				border: "none",
				backgroundColor: "black"
			}}>
			<img src={props.gallery.photo} className="card-img-top" alt="..." />
			<h5 className="card-title" style={{ marginTop: "1.5rem", backgroundcolor: "black", color: "burlywood" }}>
				{props.gallery.name}
			</h5>

			<div className="card-body" style={{ padding: "0", color: "burlywood" }}>
				{/* <p className="card-text"> </p>
				<p className="card-text"> </p>
				<p className="card-text"> </p> */}
				{/* <Link
					to={{
						pathname: "/GalleryProfile/" + props.gallery.id
						// gallery: props.gallery
					}}
					type="button"
					className="btn btn-info">
					<i className="fas fa-arrow-alt-circle-right" />
					{/* More Info */}
				{/* </Link>  */}
			</div>
			<br />
		</Link>
	);
}

GalleryCard.propTypes = {
	gallery: PropTypes.object
};
