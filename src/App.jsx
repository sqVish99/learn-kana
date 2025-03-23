import { HashRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";
import Routing from "./Routing";
import { Toaster } from "@/components/ui/toaster";

function App() {
	return (
		<HashRouter>
			<div className="app-container">
				<NavBar />
				<Routing />
				<Toaster />
			</div>
		</HashRouter>
	);
}

export default App;
