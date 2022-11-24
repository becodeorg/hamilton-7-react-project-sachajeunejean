import React, { useState } from 'react';
import Title from "../components/Title";
import Filters from '../components/Filters';
import Search from '../components/Search';

const Navbar = ({ setSearchInput, setFilters }) => {
	const [isSearchClicked, setIsSearchClicked] = useState(false);

	return (
		<nav className="nav">
			<Filters isSearchClicked={isSearchClicked} setFilters={setFilters} />
			<Title />
			<Search setSearchInput={setSearchInput} isSearchClicked={isSearchClicked} setIsSearchClicked={setIsSearchClicked}/>
		</nav>
	);
};

export default Navbar;