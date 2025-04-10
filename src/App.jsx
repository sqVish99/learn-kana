import { HashRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";
import Routing from "./Routing";
import { Toaster } from "@/components/ui/toaster";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<HashRouter>
			<div className="app-container">
				<NavBar />
				<div style={{ flex: 1 }}>
                    <Routing />
                </div>
				<Toaster />
				<Footer	/>
			</div>
		</HashRouter>
	);
}

export default App;
