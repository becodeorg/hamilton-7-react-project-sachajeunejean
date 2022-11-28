import React from 'react';
import { NavLink } from "react-router-dom";

const Title = () => {
	return (
		<NavLink to="/">
			<h1 className="logo">EVERYONEGAMES</h1>
		</NavLink>
	)
};

export default Title;