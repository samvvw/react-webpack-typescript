import React from "react";
import "./style.css";

function App(): JSX.Element {
	console.log(process.env.TEST);
	return (
		<div className="App">
			<h1>
				Welcome to Coffee Connect by Javalimos the best team ever
			</h1>
		</div>
	);
}

export default App;
