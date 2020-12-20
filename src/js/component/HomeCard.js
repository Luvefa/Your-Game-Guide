import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function HomeCard(props) {
	const { store, actions } = useContext(Context);
	return (
		<Link
			to={{
				pathname: "/GalleryProfile/" + props.home.id
			}}
			className="col-md-4">
			<div
				className="card mb-4 shadow-sm"
				style={{
					// width: "25%",
					border: "3px solid",
					boxShadow: "unset",
					padding: "15px",
					border: "none",
					backgroundColor: "black",
					flexWrap: "wrap"
				}}>
				<img src={props.home.photo} className="card-img-top" style={{ width: "100%" }} />
				<div className="card-body">
					<p className="card-text">{props.home.name}</p>
				</div>
			</div>
		</Link>
	);
}
HomeCard.propTypes = {
	home: PropTypes.object
};
