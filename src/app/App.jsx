import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routers from "../routers/Routers";
import Sidebar from "../components/sidebar/Sidebar";

function App() {
	return (
		<BrowserRouter>
			<Sidebar>
				<Routers />
			</Sidebar>
		</BrowserRouter>
	);
}

export default App;
