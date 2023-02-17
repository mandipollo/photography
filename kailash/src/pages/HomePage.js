import Landing from "../components/content/Landing";
import Caraousel from "../components/caraousel/Caraousel";

import { useLoaderData } from "react-router-dom";
import Testimonials from "../components/testimonials/Testimonials";

const HomePage = () => {
	const data = useLoaderData();

	return (
		<>
			<Landing />
			{data ? (
				<Caraousel data={data} />
			) : (
				[] && (
					<p style={{ textAlign: `center`, fontSize: `4rem`, color: `red` }}>
						Couldn't fetch the Carousel.
					</p>
				)
			)}

			<Testimonials />
		</>
	);
};

export default HomePage;

// fetch data from unsplash api
export const homepageLoader = async () => {
	const response = await fetch(
		`https://api.unsplash.com/photos/random?count=10&client_id=IW_HTXKDFTwcPm8FqldBEdNOMCwabapucayEwxDYm2s`
	);

	if (!response.ok) {
		throw new Error(`something went wrong with fetching fail!`);
	}

	const data = await response.json();

	return data;
};

// fetch portrait photos from unsplash api
