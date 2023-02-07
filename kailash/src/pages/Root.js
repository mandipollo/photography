import { useNavigation, Outlet } from "react-router-dom";
import MainNavigation from "../components/header/Navbar";

const Root = () => {
	const navigation = useNavigation();

	return (
		<>
			<MainNavigation />
			<main>
				{navigation.state === "loading" && <p>Loading....</p>}
				<Outlet />
			</main>
		</>
	);
};

export default Root;
