import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Header } from "./component/Header";
import { LoginForm } from "./component/LoginForm";
import { Gallery } from "./views/Gallery";
import { Action } from "./views/Action";
import { Sport } from "./views/Sport";
import { Racing } from "./views/Racing";
import { Shooter } from "./views/Shooter";

import { Login } from "./views/Login";
import injectContext from "./store/appContext";
import { GalleryProfile } from "./component/GalleryProfile";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					{/* <Header /> */}
					<Switch>
						<Route exact path="/">
							<Home />
							<Footer />
						</Route>
						<Route exact path="/Gallery">
							<Gallery />
							<Footer />
						</Route>
						<Route exact path="/Action">
							<Action />
						</Route>
						<Route exact path="/Sport">
							<Sport />
						</Route>
						<Route exact path="/Racing">
							<Racing />
						</Route>
						<Route exact path="/Shooter">
							<Shooter />
						</Route>
						<Route exact path="/GalleryProfile/:id">
							{/* <Header /> */}
							<GalleryProfile />
						</Route>

						<Route exact path="/About">
							<Login />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
