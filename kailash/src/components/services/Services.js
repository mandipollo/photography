import classes from "./services.module.css";

const Price = ({ title, details }) => {
	return (
		<>
			<p>{title}</p>
			{details.map(detail => (
				<p key={detail}> {detail}</p>
			))}
		</>
	);
};

const Services = () => {
	const services = [
		{
			title: `potrait photography`,
			details: [
				"Mini session (30 minutes, 10 digital images): $150",
				"	Standard session (1 hour, 20 digital images): $250",
				"Premium session (2 hours, 30 digital images): $400",
			],
		},
		{
			title: `wedding photography`,
			details: [
				"Basic package (6 hours, 200-300 digital images): $1500",
				"Standard package (8 hours, 400-500 digital images, 1 photographer: $2500",
				"Premium package (10 hours, 600-700 digital images, 2 photographers):$4000",
			],
		},
		{
			title: `event photography`,
			details: [
				"Mini package (2 hours, 50 digital images): $300",
				"Standard package (4 hours, 100 digital images): $500",
				"Premium package (6 hours, 200 digital images): $800",
			],
		},
		{
			title: `product photography`,
			details: [
				"Basic package (10 products, white background, 1 angle): $300",
				"Standard package (20 products, white background, 2 angles): $500",
				"Premium package (30 products, white background, 3 angles): $800",
			],
		},
	];
	return (
		<div className={classes.services}>
			{services.map(service => (
				<div className={classes.items}>
					<Price title={service.title} details={service.details} />
				</div>
			))}
		</div>
	);
};

export default Services;
