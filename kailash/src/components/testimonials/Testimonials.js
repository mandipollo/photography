import classes from "./testimonials.module.css";
import { useState, useEffect } from "react";

const Testimonials = () => {
	//store portrait
	const [isPortrait, setPortrait] = useState([]);

	// index the portrait
	const [portraitIndex, setPortraitIndex] = useState(0);

	// check array
	const hasImage = Array.isArray(isPortrait) && isPortrait.length > 0;

	// fetch 10 random portrait from unsplash and return the data to the isPortrait
	useEffect(() => {
		const fetchPortrait = async () => {
			const response = await fetch(
				`https://api.unsplash.com/photos/random?count=10&query=portrait&client_id=IW_HTXKDFTwcPm8FqldBEdNOMCwabapucayEwxDYm2s`
			);

			const data = await response.json();

			setPortrait(data);
		};
		fetchPortrait();
	}, []);

	// navigation
	const previousBtnHandler = () => {
		if (portraitIndex < 0) {
			return;
		}
		setPortraitIndex(portraitIndex - 1);
	};

	const nextBtnHandler = () => {
		if (portraitIndex === isPortrait.length) {
			return;
		}
		setPortraitIndex(portraitIndex + 1);
	};

	return (
		<div className={classes.testimonials}>
			<div className={classes.previousBtn}>
				<button onClick={previousBtnHandler}>PREVIOUS</button>
			</div>

			<div className={classes["testimonials - image"]}>
				{hasImage && (
					<img
						style={{ height: `500px` }}
						src={isPortrait[portraitIndex].urls.small}
						alt=""
					></img>
				)}

				{hasImage && (
					<div className={classes["testimonials-text"]}>
						<p> {isPortrait[portraitIndex].user.name}</p>
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

// export const portraitLoader = async () => {
// 	return new Promise(resolve => {
// 		setTimeout(async () => {
// 			const response = await fetch();

// 			if (!response.ok) {
// 				throw new Error(`fetching portrait failed !!`);
// 			}

// 			const data = await response.json();
// 			console.log(`hello2`);

// 			resolve(data);
// 		}, 500);
// 	});
// };
