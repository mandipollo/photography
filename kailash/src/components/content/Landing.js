import classes from "./landing.module.css";
import img1 from "../../assets/img1.jpeg";

import { useEffect, useState } from "react";

const Landing = () => {
	//words array
	const words = ["Hello", "Bonjour", "Hola", "Ciao"];

	// useState current word
	const [wordsUsed, setWords] = useState(words[0]);

	// change the wordsUsed

	useEffect(() => {
		const intervalTimer = setInterval(() => {
			setTimeout(() => {
				const index = words.indexOf(wordsUsed);
				const nextIndex = (index + 1) % words.length;
				setWords(words[nextIndex]);
			}, 500);
		}, 2000);

		return () => clearInterval(intervalTimer);
	}, [wordsUsed, words]);

	return (
		// covering div
		<div className={classes.landing}>
			{/* div1 flex: 1 */}
			<div className={classes.outro}>
				<p className={classes.text}>{wordsUsed}</p>
			</div>

			{/* div2}*/}
			<div className={classes.img}>
				<img alt="a bride checking herself in the mirror" src={img1}></img>
				<p>
					"There is no one who loves pain itself,
					<br />
					who seeks after it <br />
					and wants to have it, simply because it is pain..."
				</p>
			</div>
		</div>
	);
};

export default Landing;
