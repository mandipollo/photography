import { useState, useEffect } from "react";
import classes from "./imageSlider.module.css";

// image slider deconstruct props
const ImageSlider = ({ image }) => {
	// usestate for index
	const [imageIndex, setImageIndex] = useState(0);

	const [descriptionIndex, setDescription] = useState(0);
	// transitioning
	const [isTransitioning, setTransition] = useState(false);
	// store the img in an array
	const slides = image.map(data => data.urls.regular);

	// store the alt description for the image
	const description = image.map(descr => descr.alt_description);

	// render next image every 6 sec and clearOut interval
	useEffect(() => {
		const intervalTime = setInterval(() => {
			setTransition(true);
			setTimeout(() => {
				setTransition(false);
				setImageIndex((imageIndex + 1) % slides.length);
				setDescription((descriptionIndex + 1) % description.length);
			}, 500);
		}, 5000);

		return () => clearInterval(intervalTime);
	}, [imageIndex, descriptionIndex, slides.length, description.length]);

	// navigate butoons

	const previousBtn = () => {
		if (imageIndex === 0) {
			return;
		}
		setImageIndex(imageIndex - 1);
	};

	const nextBtn = () => {
		if (imageIndex === slides.length - 1) {
			return;
		}
		setImageIndex(imageIndex + 1);
	};

	// return current image
	return (
		<div className={classes.imageSlider}>
			<div className={classes.previousBtn}>
				<button onClick={previousBtn}>PREVIOUS</button>
			</div>
			<div className={classes.slides}>
				<div>
					<img
						alt={description[descriptionIndex]}
						style={{
							transform: isTransitioning
								? "translateX(-100%)"
								: "translateX(0)",
						}}
						src={slides[imageIndex]}
					></img>
				</div>
				<div className={classes.quote}>
					<p>{description[descriptionIndex]}</p>
				</div>
			</div>

			<div className={classes.nextBtn}>
				<button onClick={nextBtn}> NEXT</button>
			</div>
		</div>
	);
};

export default ImageSlider;
