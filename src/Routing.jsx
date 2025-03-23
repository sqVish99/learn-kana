import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Hiragana from "./pages/Hiragana/Hiragana";
import Katakana from "./pages/Katakana/Katakana";
import Kanji from "./pages/Kanji/Kanji";
import NotFound from "./pages/NotFound/NotFound";

const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/hiragana" element={<Hiragana />} />
			<Route path="/katakana" element={<Katakana />} />
			<Route path="/kanji" element={<Kanji />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default Routing;
