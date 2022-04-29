import WeatherForecast from "./WeatherForecast";
import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForm from "./WeatherForm";
import "./Weather.css";

export default function Weather(props) {
	let [weatherData, setWeatherData] = useState({ ready: false });

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

	function search(city) {
		const apiKey = "f76de3da1e1e9f05627e1fb9cce31ae0";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}

	if (weatherData.ready) {
		return (
			<div className="Weather">
				<WeatherForm onSearch={search} />
				<WeatherInfo data={weatherData} />
				<WeatherForecast coordinates={weatherData.coordinates} />
			</div>
		);
	} else {
		search(props.defaultCity);
		return "Loading...";
	}
}
