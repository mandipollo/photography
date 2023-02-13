import classes from "./caraousel.module.css";

// slide image
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";

// slider component
import ImageSlider from "./ImageSlider";

const Caraousel = () => {
	// array of image in an object
	const images = {
		img1,
		img2,
		img3,
	};

	return (
		<div className={classes.caraousel}>
			{/* image slider component with images as prop */}

			<ImageSlider image={images} />
		</div>
	);
};

export default Caraousel;
