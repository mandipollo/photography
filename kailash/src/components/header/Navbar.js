//components import
import AboutUs from "../navbar-items/AboutUs";
import Label from "../navbar-items/Label";
import Menu from "../navbar-items/Menu";
import MyWork from "../navbar-items/MyWork";
import Pricing from "../navbar-items/Pricing";
import classes from "./navbar.module.css";

// route imports
import { NavLink, Link } from "react-router-dom";

// main navigation
const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li className={classes.menu}>
						<NavLink
							end
							to="/"
							className={({ isActive }) =>
								isActive ? classes.active : undefined
							}
						>
							<Menu />
						</NavLink>
					</li>
					<li className={classes.label}>
						<Label />
					</li>
					<li className={classes.routes}>
						<NavLink
							className={({ isActive }) =>
								isActive ? classes.active : undefined
							}
							to="myWork"
							end
						>
							<MyWork />
						</NavLink>
					</li>
					<li className={classes.routes}>
						<NavLink
							className={({ isActive }) =>
								isActive ? classes.active : undefined
							}
							to="pricing"
						>
							<Pricing />
						</NavLink>
					</li>
					<li className={classes.routes}>
						<NavLink
							className={({ isActive }) =>
								isActive ? classes.active : undefined
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
