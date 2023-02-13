import { useState, useEffect } from "react";
import classes from "./imageSlider.module.css";

// image slider deconstruct props
const ImageSlider = ({ image }) => {
	// usestate for index
	const [imageIndex, setImageIndex] = useState(0);
	// store the img in an array
	const slides = [image.img1, image.img2, image.img3];

	// render next image every 6 sec and clearOut interval
	useEffect(() => {
		const intervalTime = setInterval(() => {
			setImageIndex((imageIndex + 1) % slides.length);
		}, 6000);

		return () => clearInterval(intervalTime);
	}, [imageIndex]);

	// return current image
	return (
		<div className={classes.imageSlider}>
			<img src={slides[imageIndex]}></img>
		</div>
	);
};

// const ImageSlider = props => {
// 	const { images } = props;

// 	// state to keep track of the current slide
// 	const [currentSlide, setCurrentSlide] = useState(0);

// 	// use setInterval to advance to the next slide after a specified interval
// 	useEffect(() => {
// 		const intervalId = setInterval(() => {
// 			setCurrentSlide((currentSlide + 1) % images.length);
// 		}, 3000);
// 		return () => clearInterval(intervalId);
// 	}, [currentSlide, images.length]);

// 	return (
// 		<div>
// 			{images.map((image, index) => (
// 				<img
// 					key={index}
// 					src={image[`img${currentSlide + 1}`]}
// 					// className={index === currentSlide ? classes.active : classes.inactive}
// 				/>
// 			))}
// 		</div>
// 	);
// };

export default ImageSlider;
