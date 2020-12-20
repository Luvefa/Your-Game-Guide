import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { AuthProvider } from "./store/AuthContext";
import PrivateRoute from "./component/PrivateRoute";

import { Home } from "./views/home";
import { Header } from "./component/Header";
import { Gallery } from "./views/Gallery";
import { Action } from "./views/Action";
import { Sport } from "./views/Sport";
import { Racing } from "./views/Racing";
import { Shooter } from "./views/Shooter";
import { SignUp } from "./views/SignUp";
import { Login } from "./views/Login";
import injectContext from "./store/appContext";
import { GalleryProfile } from "./component/GalleryProfile";

import { Nav } from "./component/Nav";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/Footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	// const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("loggedIn"));
	// console.log(sessionStorage);

	return (
		<div className="container-fluid">
			<AuthProvider>
				<Router>
					{/* basename={basename} */}
					<ScrollToTop>
						{/* <Nav /> */}
						<Navbar />

						{/* isAuth={loggedIn} */}
						<Switch>
							<Route exact path="/" component={Home} />

							<PrivateRoute exact path="/Gallery" component={Gallery} />

							<PrivateRoute exact path="/Action" component={Action} />

							<PrivateRoute exact path="/Sport" component={Sport} />

							<PrivateRoute exact path="/Racing" component={Racing} />

							<PrivateRoute exact path="/Shooter" component={Shooter} />

							<PrivateRoute exact path="/GalleryProfile/:id" component={GalleryProfile} />

							<Route exact path="/SignUp">
								<SignUp />
							</Route>
							<Route exact path="/Login">
								<Login />
							</Route>
							<Route>
								<h1>Not found!</h1>
							</Route>
						</Switch>
						{/* <br />
						<br />
                    <br /> */}
					</ScrollToTop>
					<Footer />
				</Router>
			</AuthProvider>
		</div>
	);
};

export default injectContext(Layout);
