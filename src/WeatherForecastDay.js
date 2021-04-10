import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
	return (
		<div>
			<div className="col">
				<div className="WeatherForecast-day"> {props.data.dt}</div>
				<WeatherIcon code={props.data.weather[0].icon} size={36} />
				<div className="WeatherForecast-temperatures">
					<span className="WeatherForecast-maxtemp">
						{props.data.temp.max}°
					</span>
					<span className="WeatherForecast-mintemp">
						{props.data.temp.min}°
					</span>
				</div>
			</div>
		</div>
	);
}
