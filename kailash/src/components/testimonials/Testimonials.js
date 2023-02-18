import classes from "./testimonials.module.css";
import { useState, useEffect } from "react";

const Testimonials = () => {
	//store portrait
	const [isPortrait, setPortrait] = useState([]);

	// index the portrait
	const [portraitIndex, setPortraitIndex] = useState(0);

	// check array
	const hasImage = Array.isArray(isPortrait) && isPortrait.length > 0;

	// sample testimonials

	const sampleTestimonials = [
		"We absolutely loved working with [Photographer's Name]! They made us feel so comfortable during the shoot and the photos they delivered were beyond our expectations. We would definitely recommend them to anyone looking for a talented and personable photographer.",
		"I can't express how grateful I am for [Photographer's Name]. They captured every special moment at our wedding and the photos are stunning. Their attention to detail and creativity truly made the photos come to life. Thank you so much!",

		"I was nervous about doing a photoshoot but [Photographer's Name] made the experience so enjoyable and the photos turned out incredible. I couldn't have asked for a better photographer.",

		"Working with [Photographer's Name] was an absolute pleasure. They took the time to understand my vision and brought it to life through their photography. Their passion and dedication to their craft really shines through in their work.",

		"I have worked with many photographers in the past but [Photographer's Name] stands out above the rest. They are professional, talented, and truly have a knack for capturing the perfect shot. I highly recommend them.",

		"The photos [Photographer's Name] took of our family are priceless. They were able to capture the personalities of each of our family members and we will treasure these photos forever. Thank you so much!",

		"I am so impressed with [Photographer's Name]'s work. They have a unique perspective and were able to capture the essence of our brand through their photos. I highly recommend them to anyone looking for a skilled and creative photographer.",

		"I cannot recommend [Photographer's Name] enough! They are not only an incredible photographer but also a pleasure to work with. Their communication and attention to detail were exceptional.",

		"The photos that [Photographer's Name] took of our event are stunning. They captured every moment beautifully and we couldn't be happier with the final product. Thank you for your hard work and talent!",

		"I was blown away by the quality of [Photographer's Name]'s work. Their ability to capture emotion and tell a story through their photos is truly exceptional. I would highly recommend them to anyone looking for a talented and passionate photographer.",
	];

	// sample testimonials index

	const [sampleTestimonialsIndex, setSampleTestimonialsIndex] = useState(null);

	// fetch 10 random portrait from unsplash and return the data to the isPortrait
	useEffect(() => {
		const fetchPortrait = async () => {
			const response = await fetch(
				`https://api.unsplash.com/photos/random?count=10&query=portrait&client_id=IW_HTXKDFTwcPm8FqldBEdNOMCwabapucayEwxDYm2s`
			);

			const data = await response.json();

			setPortrait(data);
			setSampleTestimonialsIndex(0);
		};
		fetchPortrait();
	}, []);

	// navigation
	const previousBtnHandler = () => {
		if (portraitIndex === 0) {
			return;
		}
		setPortraitIndex(portraitIndex - 1);
		setSampleTestimonialsIndex(sampleTestimonialsIndex - 1);
	};

	const nextBtnHandler = () => {
		if (portraitIndex === isPortrait.length - 1) {
			return;
		}
		setPortraitIndex(portraitIndex + 1);
		setSampleTestimonialsIndex(sampleTestimonialsIndex + 1);
	};

	return (
		<div className={classes.testimonials}>
			<div className={classes.previousBtn}>
				<button onClick={previousBtnHandler}>PREVIOUS</button>
			</div>

			<div className={classes["testimonials-image"]}>
				{hasImage && (
					<div className={classes["testimonials-portrait"]}>
						<img src={isPortrait[portraitIndex].urls.small} alt=""></img>
					</div>
				)}

				{hasImage && (
					<div className={classes["testimonials-text"]}>
						<div className={classes["testimonials-userName"]}>
							<p> {isPortrait[portraitIndex].user.name}</p>
						</div>
						<div className={classes["testimonials-comment"]}>
							{sampleTestimonials[sampleTestimonialsIndex]}
						</div>
					</div>
				)}
			</div>
			<div className={classes.nextBtn}>
				<button onClick={nextBtnHandler}>NEXT</button>
			</div>
		</div>
	);
};

export default Testimonials;
