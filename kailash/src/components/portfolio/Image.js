import classes from "./image.module.css";

const Image = props => {
	return (
		<div className={classes.image}>
			<img src={props.data.urls.regular} alt={props.data.urls.regular}></img>
		</div>
	);
};

export default Image;
