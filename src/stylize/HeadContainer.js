import React from "react";
import "./HeadStyle.css";

const HeaderSection = props => {
	return (
		<header>
				<h1>NASA Image of the Day</h1>
				<nav>
					<div>
						<a href="#">Home</a>
						<a href="#">About</a>
					</div>
					<div>
						<a href="#">Sign-In</a>
					</div>
				</nav>
		</header>
	);
};

export default HeaderSection;