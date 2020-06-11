import React, {useState, useEffect} from "react";
import "./MainStyle.css";
import axios from "axios";
import {NASA_URL, MY_API_KEY} from "../constants";

const MainContainer = props => {
	const [nasaSpaceObj, updateSpaceObj] = useState({});
	useEffect(() => {
		axios.get(`${NASA_URL}?api_key=${MY_API_KEY}`)
		  .then(nasaImgData => {
			//console.log('Inside the NASA success method!'); //Testing ny debugger
			updateSpaceObj(nasaImgData.data); //the image is now in nasaData.data.url, which is also nasaSpaceObj.url
			console.log(nasaImgData);
			console.log(nasaImgData.data.url);
		  })
		  .catch(nasaImgError => {
			console.log('Error occurred in getting data from NASA.');
		  })
		}, []);

	return (
		<section className="imageContent">
			<div className="imageDiv">
				<img src={nasaSpaceObj.url} />
			</div>
			<div className="contentDiv">
				<h2>{nasaSpaceObj.title}</h2>
				<p>Date: {nasaSpaceObj.date}</p>
				<p>{nasaSpaceObj.explanation}</p>
			</div>
		</section>
	);
};

export default MainContainer;