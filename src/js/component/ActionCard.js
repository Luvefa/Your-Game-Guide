import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function ActionCard(props) {
	const { store, actions } = useContext(Context);
	return (
		<Link
			to={{
				pathname: "/GalleryProfile/" + props.action.id
			}}
			className="col-md-4">
			<div
				className="card mb-4 "
				style={{
					// width: "25%",
					// marginLeft: "200px",
					border: "3px solid",
					boxShadow: "unset",
					padding: "15px",
					border: "none",
					backgroundColor: "transparent",
					flexWrap: "wrap"
				}}>
				<div className="raise">
					<img src={props.action.photo1} className="card-img-top" style={{ width: "100%" }} />
				</div>
				<div className="card-body">
					<p className="card-text">{props.action.name}</p>
				</div>
			</div>
		</Link>
	);
}
ActionCard.propTypes = {
	action: PropTypes.object
};
