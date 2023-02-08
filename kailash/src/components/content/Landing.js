import classes from "./landing.module.css";
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";
import { LoremIpsum } from "lorem-ipsum";

const Landing = () => {
	return (
		<div className={classes.landing}>
			<div className={classes.outro}>
				<h1>Beautiful Moment Is Everything</h1>
			</div>
			<div className={classes.img}>
				<div className={classes.pictures}>
					<img style={{ height: `350px`, width: `250px` }} src={img1}></img>
					<p>
						"There is no one who loves pain itself,
						<br />
						who seeks after it <br />
						and wants to have it, simply because it is pain..."
					</p>
				</div>
				<div className={classes.pictures}>
					<img
						style={{ objectFit: `cover`, height: `600px`, width: `350px` }}
						src={img2}
					></img>
				</div>
				<div className={classes.pictures}>
					<img
						style={{ containFit: `cover`, height: `350px`, width: `250px` }}
						src={img3}
					></img>
					<p>
						"There is no one who loves pain itself,
						<br />
						who seeks after it <br />
						and wants to have it, simply because it is pain..."
					</p>
				</div>
			</div>
		</div>
	);
};

export default Landing;
