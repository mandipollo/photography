import { useState, useEffect } from "react";
import classes from "./imageSlider.module.css";

// image slider deconstruct props
const ImageSlider = ({ image }) => {
	// usestate for index
	const [imageIndex, setImageIndex] = useState(0);
	// transitioning
	const [isTransitioning, setTransition] = useState(false);
	// store the img in an array
	const slides = [image.img1, image.img2, image.img3];

	// render next image every 6 sec and clearOut interval
	useEffect(() => {
		const intervalTime = setInterval(() => {
			setTransition(true);
			setTimeout(() => {
				setTransition(false);
				setImageIndex((imageIndex + 1) % slides.length);
			}, 500);
		}, 5000);

		return () => clearInterval(intervalTime);
	}, [imageIndex]);

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
						style={{
							transform: isTransitioning
								? "translateX(-100%)"
								: "translateX(0)",
						}}
						src={slides[imageIndex]}
					></img>
				</div>
				<div className={classes.quote}>
					<p>
						"There is no one who loves pain itself,
						<br />
						who seeks after it <br />
						and wants to have it, simply because it is pain..."
					</p>
				</div>
			</div>

			<div className={classes.nextBtn}>
				<button onClick={nextBtn}> NEXT</button>
			</div>
		</div>
	);
};

export default ImageSlider;
