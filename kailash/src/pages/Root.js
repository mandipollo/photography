import { useNavigation, Outlet } from "react-router-dom";
import MainNavigation from "../components/header/Navbar";
import classes from "./root.module.css";

const Root = () => {
	const navigation = useNavigation();

	return (
		<div className={classes.root}>
			<MainNavigation />
			<main className={classes.content}>
				{navigation.state === "loading" && <p>Loading....</p>}
				<Outlet />
			</main>
		</div>
	);
};

export default Root;
