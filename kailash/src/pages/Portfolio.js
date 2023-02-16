import { useLoaderData } from "react-router-dom";
import Image from "../components/portfolio/Image";

const Portfolio = () => {
	const data = useLoaderData();

	return (
		<>
			<Image data={data} />
		</>
	);
};

export default Portfolio;

// laoder function for portfolio page
export const loader = async () => {
	const response = await fetch(
		`https://api.unsplash.com/photos/random?count=10&client_id=IW_HTXKDFTwcPm8FqldBEdNOMCwabapucayEwxDYm2s`
	);
	if (!response.ok) {
		throw new Error(`fetch invalid!!`);
	}
	const data = await response.json();

	return data;
};
