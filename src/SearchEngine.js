import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
	// 	let [city, setCity] = useState(" ");
	// 	let [message, setMessage] = useState(" ");
	// 	let [temperature, setTemperature] = useState(null);
	// 	let [description, setDescription] = useState(null);
	// 	let [humidity, setHumidity] = useState(null);
	// 	let [windSpeed, setWindSpeed] = useState(null);
	// 	// let [icon, setIcon] = useState(null);

	// 	function showTemperature(response) {
	// 		setTemperature(response.data.main.temp);
	// 		setDescription(response.data.weather[0].description);
	// 		setHumidity(response.data.main.humidity);
	// 		setWindSpeed(response.data.wind.speed);
	// 		console.log(response.data);
	// 	}

	// 	let units = "metric";
	// 	let apiKey = "24029506eac6ecf0aabddf3cd4ab6120";
	// 	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
	// 	// let image = `http://openweathermap.org/img/wn/${icon}.png`;
	// 	axios.get(apiUrl).then(showTemperature);

	// 	function handleSubmit(event) {
	// 		event.preventDefault();

	// 			</ul>
	// 		);
	// 	}

	// 	function changeCity(event) {
	// 		setCity(event.target.value);
	// 	}

	return (
		<div className="search-engine">
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
						<input type="submit" value="Search" className="btn btn-primary" />
					</div>
				</div>
			</form>
		</div>
	);
}
