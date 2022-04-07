import WeatherForecast from "./WeatherForecast";
import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Input from "./Input";
import "./Weather.css";

export default function Weather(props) {
	let [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);

	function handleResponse(response) {
		let {
			name,
			main: { temp, humidity },
			dt,
			weather,
			wind: { speed },
			coord,
		} = response.data;
		let [weatherInfo] = weather;
		let { description, icon } = weatherInfo;
		setWeatherData({
			ready: true,
			city: name,
			coordinates: coord,
			temperature: Math.round(temp),
			description: description,
			date: new Date(dt * 1000),
			humidity: humidity,
			wind: Math.round(speed),
			icon: icon,
		});
	}

	function search() {
		const apiKey = "f76de3da1e1e9f05627e1fb9cce31ae0";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function handleCityChange(event) {
		setCity(event.target.value);
	}

	if (weatherData.ready) {
		return (
			<div className="Weather">
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-9">
							<Input
								type="search"
								placeholder="Enter a city..."
								className="form-control"
								onChange={handleCityChange}
							/>
						</div>
						<div className="col-3">
							<Input
								type="submit"
								value="Search"
								className="btn btn-primary submit"
							/>
						</div>
					</div>
				</form>
				<WeatherInfo data={weatherData} />
				<WeatherForecast coordinates={weatherData.coordinates} />
			</div>
		);
	} else {
		search();
		return "Loading...";
	}
}
