import React from "react";
import FormattedDate from "./FormattedDate";
import ReactAnimatedWeather from "react-animated-weather";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
					<WeatherIcon code={props.data.icon} />
					<WeatherTemperature celsius={props.data.temperature} />
				</div>
				<div className="col-6">
					<ul>
						<li>Humidity: {props.data.humidity}%</li>
						<li>Wind Speed: {props.data.wind} km/h</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
