// router imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage, { loader as homepageLoader } from "./pages/HomePage";
import Root from "./pages/Root";
import Portfolio, { loader as portfolioLoader } from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/AboutUs";

import "./App.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				element: <HomePage />,
				loader: homepageLoader,
			},
			{
				path: "myWork",
				element: <Portfolio />,
				loader: portfolioLoader,
			},
			{
				path: "pricing",
				element: <Pricing />,
			},
			{ path: "aboutUs", element: <AboutUs /> },
		],
	},
]);

function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
