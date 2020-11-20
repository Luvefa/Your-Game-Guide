import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Home = () => (
	<div className="container-fluid">
		<div className="container">
			<br />
			<br />

			<ul className="nav justify-content-center">
				<Link
					className=" fill"
					to="/Action/"
					style={{
						background: "none",
						border: "2px solid",
						borderColor: "#A972CB",
						font: "inherit",
						lineheight: 1,
						margin: "0.5em",
						padding: "1em 2em"
					}}>
					Action
				</Link>

				<Link
					className="pulse"
					to="/Sport/"
					style={{
						background: "none",
						border: "2px solid",
						borderColor: "#EF6EAE",
						font: "inherit",
						lineheight: 1,
						margin: "0.5em",
						padding: "1em 2em"
					}}>
					Sports
				</Link>

				<Link
					className="raise"
					to="/Racing/"
					style={{
						background: "none",
						border: "2px solid",
						borderColor: "#FFA260",
						font: "inherit",
						lineheight: 1,
						margin: "0.5em",
						padding: "1em 2em"
					}}>
					Racing
				</Link>

				<Link
					className="up"
					to="/Shooter/"
					style={{
						background: "none",
						border: "2px solid",
						borderColor: "#E4CB58",
						font: "inherit",
						lineheight: 1,
						margin: "0.5em",
						padding: "1em 2em"
					}}>
					Shooter
				</Link>
				<Link
					className="offset"
					to="/Gallery/"
					style={{
						background: "none",
						border: "2px solid",
						borderColor: "#19BC8B",
						font: "inherit",
						lineHeight: 1,
						margin: "0.5em",
						padding: "1em 2em"
					}}>
					All Games
				</Link>
			</ul>
		</div>
		<div className="wrapper">
			<img src="https://atorredecontrole.com.br/wp-content/uploads/2020/10/console-playstation5-2.png" />
		</div>
		<div className="text-center mt-5" style={{ color: "white" }}>
			<h1>Top 20 Upcoming Games of 2020 </h1>
			<br />
			<div className="auto-resizable-iframe">
				<div>
					<iframe frameBorder="0" allowFullScreen="" src="https://www.youtube.com/embed/CQKvhoe15M4" />
				</div>
			</div>
			<h1>Top 25 NEW Single Player Games of 2020</h1>
			<br />
			<div className="auto-resizable-iframe">
				<div>
					<iframe frameBorder="0" allowFullScreen="" src="https://www.youtube.com/embed/8gyd3bSNE8Q" />
				</div>
			</div>
			<h1>Top 20 NEW Third Person Games of 2020</h1>
			<br />
			<div className="auto-resizable-iframe">
				<div>
					<iframe frameBorder="0" allowFullScreen="" src="https://www.youtube.com/embed/HwV12XfCnPg" />
				</div>
			</div>
		</div>
		<br />
		<br />
	</div>
);
