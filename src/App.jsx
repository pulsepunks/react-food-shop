import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import { Movies } from "./pages/Movies";
import { NotFound } from "./pages/NotFound";

function App() {
	return (
		<>
			<Header />
			<Main>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/about'
						element={<About />}
					/>
					<Route
						path='/contacts'
						element={<Contacts />}
					/>
					<Route
						path='/movies/:id'
						element={<Movies />}
					/>
					<Route
						path='*'
						element={<NotFound />}
					/>
				</Routes>
			</Main>
			<Footer />
		</>
	);
}

export default App;
