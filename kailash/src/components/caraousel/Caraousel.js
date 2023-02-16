import classes from "./caraousel.module.css";

// slider component
import ImageSlider from "./ImageSlider";

const Caraousel = props => {
	return (
		<div className={classes.caraousel}>
			{/* image slider component with images as prop */}

			<ImageSlider image={props.data} />
		</div>
	);
};

export default Caraousel;
