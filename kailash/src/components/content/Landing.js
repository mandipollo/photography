import classes from "./landing.module.css";
import img1 from "../../assets/img1.jpeg";

const Landing = () => {
	return (
		// covering div
		<div className={classes.landing}>
			{/* div1 flex: 1 */}
			<div className={classes.outro}>
				<p className={classes.text}>Beautiful Moment Is Everything</p>
			</div>

			{/* div2}*/}
			<div className={classes.img}>
				<img src={img1}></img>
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
