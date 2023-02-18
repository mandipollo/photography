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
		}, 1000);

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
				<div className={classes.imageContainer}>
					<img alt="a bride checking herself in the mirror" src={img1}></img>
				</div>
				<div className={classes.intro}>
					<p>
						Hi there!
						<br /> I'm a photographer with a passion for capturing stunning
						images that tell a story. With years of experience behind the
						camera, I've honed my skills to create visually striking images that
						leave a lasting impression. Whether it's capturing the perfect
						moment at a wedding, documenting the beauty of nature, or shooting
						editorial images for a publication, I bring a creative eye and
						technical expertise to every shoot.
						<br /> <br />
						On my website, you'll find a curated selection of my best work, from
						breathtaking landscapes to intimate portraits. Each image is
						carefully crafted to showcase the unique beauty and personality of
						my
						<br />
						subjects, and I strive to create a comfortable and collaborative
						environment during every shoot.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Landing;
