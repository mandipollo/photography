import classes from "./image.module.css";

const Image = props => {
	return (
		<div className={classes.image}>
			{/* <img src={props.data.urls.regular} alt={props.data.urls.regular}></img> */}
			<ul>
				{props.data.map(image => (
					<li className={classes.imageDiv} key={image.id}>
						<img src={image.urls.regular} alt={image.alt}></img>
						<p>{image.alt}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Image;
