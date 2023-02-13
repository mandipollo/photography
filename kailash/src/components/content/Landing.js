import classes from "./landing.module.css";
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";

const Landing = () => {
	return (
		// covering div
		<div className={classes.landing}>
			{/* div1 flex: 1 */}
			<div className={classes.outro}>
				<p className={classes.text}>Beautiful Moment Is Everything</p>
			</div>

			{/* div2, flex :2 */}
			<div className={classes.img}>
				{/* image div lined in column, flex :1*/}
				<div className={classes.pictures}>
					<img src={img1}></img>
					<p>
						"There is no one who loves pain itself,
						<br />
						who seeks after it <br />
						and wants to have it, simply because it is pain..."
					</p>
				</div>
				<div className={classes.pictures}>
					<img src={img2}></img>
					<p>
						"There is no one who loves pain itself,
						<br />
						who seeks after it <br />
						and wants to have it, simply because it is pain..."
					</p>
				</div>
				<div className={classes.pictures}>
					<img src={img3}></img>
					<p>
						"There is no one who loves pain itself,
						<br />
						who seeks after it <br />
						and wants to have it, simply because it is pain..."
					</p>
				</div>

				{/* <p
					style={{
						fontSize: "2rem",
						textAlign: "center",
					}}
				>
					kailash is a farnborough based event photographer with 10 years of
					experience in event photography/videography
				</p> */}
			</div>
		</div>
	);
};

export default Landing;
