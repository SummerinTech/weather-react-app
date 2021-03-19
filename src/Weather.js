import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather() {
	let [weatherData, setWeatherData] = useState({ ready: false });

	function handleResponse(response) {
		setWeatherData({
			ready: true,
			city: response.data.name,
			temperature: Math.round(response.data.main.temp),
			description: response.data.weather[0].description,
			date: new Date(response.data.dt * 1000),
			humidity: response.data.main.humidity,
			wind: Math.round(response.data.wind.speed),
		});
	}

	if (weatherData.ready) {
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
				<WeatherInfo data={weatherData} />
			</div>
		);
	} else {
		const apiKey = "f76de3da1e1e9f05627e1fb9cce31ae0";
		let city = "London";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);

		return "Loading...";
	}
}
