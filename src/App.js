import Weather from "./Weather";
import "./App.css";

function App() {
	return (
		<div>
			<div className="App">
				<div className="container">
					<Weather defaultCity="London" />
				</div>
			</div>
			<footer>
				{" "}
				<a
					href="https://github.com/SummerinTech/weather-react-app"
					target="about_blank"
				>
					Open-source code
				</a>{" "}
				by Summer Robinson
			</footer>
		</div>
	);
}

export default App;
