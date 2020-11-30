import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<div className="container">
		<footer className="footer mt-auto text-center">
			<div className="container flex text-center">
				<Link to="/">
					<i className="fas fa-gamepad fa-4x" />
				</Link>
			</div>

			{/* <div className="wrapper">
				<div className="clearfix">
					<Link className="text" to="/">
						<i className="fas fa-home fa-2x" />
					</Link>
					<br />
					<Link className="text" to="/Gallery/">
						<i className="fas fa-gamepad fa-2x" />
					</Link>
					<br />
					<Link className="text" to="/Signup">
						<i className="fas fa-user-plus fa-2x" />
					</Link>
				</div>
			</div> */}
		</footer>
	</div>
);
