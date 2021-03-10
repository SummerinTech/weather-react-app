import SearchEngine from "./SearchEngine";
import Weather from "./Weather";
import Forecast from "./Forecast";
import { ReactComponent as ReactLogo } from "./WeatherIcon.svg";
import "./App.css";

function App() {
	return (
		<div>
			<div className="App">
				<div className="container">
					<SearchEngine />
					<Weather />
					<Forecast />
				</div>
			</div>
			<footer>
				{" "}
				<a href="https://github.com/SummerinTech" target="about_blank">
					Open-source code
				</a>{" "}
				by Summer Robinson
			</footer>
		</div>
	);
}

export default App;
