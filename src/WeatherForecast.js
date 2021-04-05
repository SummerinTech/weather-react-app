import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
	let apiKey = "f76de3da1e1e9f05627e1fb9cce31ae0";
	let lat = 74;
	let lon = 40.7;
	let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

	return (
		<div className="WeatherForecast">
			<div className="row">
				<div className="col">
					<div className="WeatherForecast-day"> Thu </div>
					<WeatherIcon code="01d" size={36} />
					<div className="WeatherForecast-temperatures">
						<span className="WeatherForecast-maxtemp">75 </span>
						<span className="WeatherForecast-mintemp">50</span>
					</div>
					<div> 19:10</div>
				</div>
			</div>
		</div>
	);
}
