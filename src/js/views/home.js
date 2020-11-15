import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Home = () => (
	<div className="container-fluid">
		<div className="container">
			<br />
			<br />
			<div className="buttons text-center">
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
			</div>
		</div>
		<div className="text-center mt-5" style={{ color: "white" }}>
			<div className="wrapper">
				<h1>HOME PAGE</h1>
				<iframe
					src="https://www.youtube.com/embed/CQKvhoe15M4"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					style={{ width: "40%", height: "300px", border: "0" }}
					allowFullScreen
				/>
			</div>
			<div className="wrapper">
				<h1>HOME PAGE</h1>
				<iframe
					src="https://www.youtube.com/embed/RkC0l4iekYo"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					style={{ width: "40%", height: "300px", border: "0" }}
					allowFullScreen
				/>
			</div>
			<div className="wrapper">
				<h1>HOME PAGE</h1>
				<iframe
					src="https://www.youtube.com/embed/W78jqH6skjI?start=10"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					style={{ width: "40%", height: "300px", border: "0" }}
					allowFullScreen
				/>
			</div>
		</div>
		<br />
	</div>
);
