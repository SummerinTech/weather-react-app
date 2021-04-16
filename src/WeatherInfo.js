import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
	return (
		<div className="weatherInfo">
			<h1>{props.data.city}</h1>

			<ul className="LeftUl">
				<li>
					<FormattedDate date={props.data.date} />
				</li>
				<li className="description">{props.data.description}</li>
			</ul>
			<div className="row">
				<div className="col-6 weather-group">
					<WeatherIcon
						className="main-canvas"
						code={props.data.icon}
						size={52}
					/>
					<WeatherTemperature celsius={props.data.temperature} />
				</div>
				<div className="col-6 data-group">
					<ul>
						<li>Humidity: {props.data.humidity}%</li>
						<li>Wind Speed: {props.data.wind} km/h</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
