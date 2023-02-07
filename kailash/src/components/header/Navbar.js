//components import
import AboutUs from "../navbar-items/AboutUs";
import Label from "../navbar-items/Label";
import Menu from "../navbar-items/Menu";
import MyWork from "../navbar-items/MyWork";
import Pricing from "../navbar-items/Pricing";
import classes from "./navbar.module.css";

// route imports
import { NavLink } from "react-router-dom";

// main navigation
const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li className={classes.menu}>
						<Menu />
					</li>
					<li className={classes.label}>
						<Label />
					</li>
					<li className={classes.routes}>
						<NavLink
							className={({ isActive }) =>
								isActive ? classes.isActive : undefined
							}
							to="myWork"
						>
							<MyWork />
						</NavLink>
					</li>
					<li className={classes.routes}>
						<NavLink
							className={({ isActive }) =>
								isActive ? classes.isActive : undefined
							}
							to="pricing"
						>
							<Pricing />
						</NavLink>
					</li>
					<li className={classes.routes}>
						<NavLink
							className={({ isActive }) =>
								isActive ? classes.isActive : undefined
							}
							to="aboutUs"
						>
							<AboutUs />
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
