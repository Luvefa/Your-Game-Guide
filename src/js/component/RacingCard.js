import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function RacingCard(props) {
	const { store, actions } = useContext(Context);
	return (
		<Link
			to={{
				pathname: "/GalleryProfile/" + props.racing.id
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
					<img src={props.racing.photo} className="card-img-top" style={{ width: "100%" }} />
				</div>
				<div className="card-body">
					<p className="card-text">{props.racing.name}</p>
				</div>
			</div>
		</Link>
	);
}

RacingCard.propTypes = {
	racing: PropTypes.object
};
