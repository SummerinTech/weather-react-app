import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.css";

export default function Weather() {
	return (
		<div className="Weather">
			<h1>New York, NY</h1>
			<ul>
				<li> Wednesday 7:00</li>
				<li>Mostly cloudy</li>
			</ul>
			<div className="row">
				<div className="col-6">
					<ReactAnimatedWeather
						icon="CLEAR_DAY"
						color="black"
						size={60}
						animate={true}
					/>
					6°C|F
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
