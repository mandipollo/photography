import Landing from "../components/content/Landing";
import Caraousel from "../components/caraousel/Caraousel";

import { useLoaderData } from "react-router-dom";

const HomePage = () => {
	const data = useLoaderData();
	return (
		<>
			<Landing />
			<Caraousel data={data} />
		</>
	);
};

export default HomePage;

// fetch data from unsplash api
export const loader = async () => {
	const response = await fetch(
		`https://api.unsplash.com/photos/random?count=10&client_id=IW_HTXKDFTwcPm8FqldBEdNOMCwabapucayEwxDYm2s`
	);

	if (!response.ok) {
		throw new Error(`something went wrong with fetching fail!`);
	}

	const data = await response.json();

	return data;
};
