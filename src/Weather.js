import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.css";

export default function Weather() {
	function handleResponse(response) {
		console.log(response.data);
	}
	const apiKey = "24029506eac6ecf0aabddf3cd4ab6120";
	let city = "London";
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
	axios.get(apiUrl).then(handleResponse);

	return (
		<div className="Weather">
			<form>
				<div className="row">
					<div className="col-9">
						<input
							type="search"
							placeholder="Enter a city..."
							className="form-control"
						/>
					</div>
					<div className="col-3">
						<input
							type="submit"
							value="Search"
							className="btn btn-primary submit"
						/>
					</div>
				</div>
			</form>
			<h1>New York</h1>
			<ul>
				<li></li>
				<li>Mostly cloudy</li>
			</ul>
			<div className="row">
				<div className="col-6">
					<ReactAnimatedWeather
						icon="CLEAR_DAY"
						color="black"
						size={75}
						animate={true}
					/>
					<span className="temperature">6</span>
					<span className="units">°C|F</span>
				</div>
				<div className="col-6">
					<ul>
						<li>Precipitation: 15%</li>
						<li>Humidity: 70%</li>
						<li>Wind Speed: 10 km/h</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
