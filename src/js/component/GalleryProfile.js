import React, { useContext, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Carousel, Button } from "react-bootstrap";

export function GalleryProfile() {
	const { store, actions } = useContext(Context);
	const [pluslikes, updatePluslikes] = useState(null);

	const [minuslikes, updateMinuslikes] = useState(null);
	// console.log("The link was clicked. b.");

	// use params gives us access to the URL variable id
	let params = useParams();
	// use history gives us access to go back to the last page
	let history = useHistory();

	let gallery = actions.getGallery(params.id);
	// console.log(gallery);
	let content = "Game Not Found";

	// const onClick = e => {
	// 	e.preventDefault();
	// 	const { pluslikes, menuslikes } = event.target.elements;
	// };

	return (
		<div className="container">
			<div className="card-group" style={{ paddingBottom: "150px" }}>
				<div
					className="card text-center"
					style={{ backgroundColor: "black", color: "white", marginTop: "25px" }}>
					<h1>{gallery.name}</h1>
				</div>
				<div className="container" style={{ border: "none ", backgroundColor: "black", textAlign: "center" }}>
					<Carousel>
						<Carousel.Item interval={1000}>
							<img
								className="card-img-top"
								src={gallery.photo1}
								style={{ width: "100%", height: "100%" }}
								alt="First slide"
							/>
						</Carousel.Item>
						<Carousel.Item interval={500}>
							<img
								className="card-img-top"
								src={gallery.photo2}
								style={{ width: "100%", height: "100%" }}
								alt="Second slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="card-img-top"
								src={gallery.photo3}
								style={{ width: "100%", height: "100%" }}
								alt="Third slide"
							/>
						</Carousel.Item>
					</Carousel>
					<div className="content" style={{ display: "flex", justifyContent: "center" }}>
						<Button onClick={() => updatePluslikes(pluslikes + 1)} variant="outline-warning">
							{gallery.likes}
							<i className="far fa-thumbs-up" /> <i>{pluslikes}</i>
						</Button>

						<Button onClick={() => updateMinuslikes(minuslikes - 1)} variant="outline-danger">
							<i>{minuslikes}</i> <i className="far fa-thumbs-down" />
						</Button>
					</div>

					<div className="row">
						{/* margin: "auto ",  */}
						<div
							className="card-body col-6"
							style={{
								color: "white",
								maxWidth: "none",
								width: "50%",
								placeContent: "space-between",
								justifyContent: "center"
							}}>
							<h5 className="card-title">
								<strong>{gallery.name}</strong>
							</h5>
							<p className="card-text">
								Console:
								{gallery.console}
							</p>
							<p className="card-text">
								Genre:
								{gallery.genre}
							</p>
							<p className="card-text">
								Publisher:
								{gallery.publisher}
							</p>
							<p className="card-text">
								Rating:
								{gallery.ratings}
							</p>
							<p className="card-text">{gallery.desc}</p>
						</div>

						<iframe
							src={gallery.video}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							style={{
								width: 500,
								height: 250,
								marginRight: "20px",
								marginLeft: "20px",
								marginTop: "20px"
							}}
							allowFullScreen
						/>
					</div>
				</div>
			</div>
		</div>
	);
	return <div className="text-center mt-5">{content}</div>;
}
