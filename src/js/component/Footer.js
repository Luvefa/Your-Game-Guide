import React from "react";
// import { Link } from "react-router-dom";
import { Nav, NavDropdown, Navbar, DropdownButton, Dropdown, Button } from "react-bootstrap";

export const Footer = () => (
	<div className="container-fluid">
		{/* <footer className="footer mt-auto text-center"> */}
		<Navbar variant="danger" bg="light" expand="lg" style={{ textShadow: "10px 10px 22px black" }}>
			<Navbar.Brand href="/">
				<i className="fas fa-gamepad fa-2x" />
			</Navbar.Brand>
			<Navbar.Toggle
				aria-controls="basic-navbar-nav"
				style={{ border: "2px solid aqua", textShadow: "10px 10px 22px black" }}
			/>
			{/* <Button
				aria-controls="basic-navbar-nav"
				type="button"
				aria-label="Toggle navigation"
				className="navbar-toggler">
				<span className="navbar-toggler-icon" />
				<i className="fas fa-caret-square-down fa-2x" />
			</Button> */}
			{/* <Button variant="outline-dark">Dark</Button> */}
			<Navbar.Collapse id="basic-navbar-nav">
				{" "}
				{/* <i className="fas fa-caret-square-down fa-2x" style={{ paddingRight: "10px" }} /> */}
				<Nav className=" mr-auto">
					<Nav.Link href="https://www.facebook.com/" target="blank">
						<i className="fab fa-facebook fa-1x" />
					</Nav.Link>
					<Nav.Link href="https://www.instagram.com/" target="blank">
						<i className="fab fa-instagram fa-1x" />
						{/* <i className="fab fa-instagram-square" /> */}
					</Nav.Link>
					<Nav.Link href="https://twitter.com/?lang=en" target="blank">
						<i className="fab fa-twitter-square fa-1x" />
					</Nav.Link>
					<Nav.Link href="https://www.youtube.com/" target="blank">
						<i className="fab fa-youtube fa-1x" />
					</Nav.Link>
					<Nav.Link href="https://www.linkedin.com/" target="blank">
						<i className="fab fa-linkedin fa-1x" />
					</Nav.Link>
				</Nav>
				<Nav className="navb-color ml-auto">
					<Nav.Link href="/Action">
						<h5>Action</h5>
					</Nav.Link>
					<Nav.Link href="/Sport">
						<h5>Sport</h5>
					</Nav.Link>
					<Nav.Link href="/Racing">
						<h5>Racing</h5>
					</Nav.Link>
					<Nav.Link href="/Shooter">
						<h5>Shooter</h5>
					</Nav.Link>
					<Nav.Link href="/Gallery">
						<h5>All Games</h5>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</div>
);
