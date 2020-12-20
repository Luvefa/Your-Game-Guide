import React, { useContext } from "react";
//import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export function Header(props) {
	const { store, actions } = useContext(Context);
	// use params gives us access to the URL variable id
	let params = useParams();
	// use history gives us access to go back to the last page
	let history = useHistory();

	let gallery = actions.getGallery(params.id);
	// console.log(gallery);
	return (
		<div className="container">
			<div className="jumbotron jumbotron-fluid">
				<h4>
					text paragraph, text paragraph, text paragraph, text paragraph, text paragraph, text paragraph, text
					paragraph, text paragraph, text paragraph, text paragraph, text paragraph,text paragraph, text
					paragraph, text paragraph, text paragraph,{" "}
				</h4>
			</div>
		</div>
	);
}
