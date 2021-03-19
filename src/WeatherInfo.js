import React from "react";
import FormattedDate from "./FormattedDate";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherInfo(props) {
	return (
		<div className="weatherInfo">
			<h1>{props.data.city}</h1>
			<ul>
				<li>
					<FormattedDate date={props.data.date} />
				</li>
				<li>{props.data.description}</li>
			</ul>
			<div className="row">
				<div className="col-6">
					<ReactAnimatedWeather
						icon="CLEAR_DAY"
						color="black"
						size={75}
						animate={true}
					/>
					<span className="temperature">{props.data.temperature}</span>
					<span className="units">°C|F</span>
				</div>
				<div className="col-6">
					<ul>
						<li>Humidity: {props.data.humidity}%</li>
						<li>Wind Speed: {props.data.wind}km/h</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
