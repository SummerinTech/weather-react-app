import Input from "./Input";
import { useState } from "react";

const WeatherForm = (props) => {
	const [city, setCity] = useState("");

	function handleSubmit(event) {
		event.preventDefault();
		props.onSearch(city);
		setCity("");
	}

	function handleCityChange(event) {
		setCity(event.target.value);
	}
	return (
		<form onSubmit={handleSubmit}>
			<div className="row">
				<div className="col-9">
					<Input
						type="search"
						placeholder="Enter a city..."
						className="form-control"
						onChange={handleCityChange}
						value={city}
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
	);
};

export default WeatherForm;
