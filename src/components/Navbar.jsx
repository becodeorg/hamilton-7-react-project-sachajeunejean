import React, { useState } from 'react';
import Title from "../components/Title";
import Filters from '../components/Filters';
import Search from '../components/Search';

const Navbar = ({ onSingleGame, setSearchInput, setFilters, setFiltersElement }) => {
	const [isSearchClicked, setIsSearchClicked] = useState(false);

	return (
		<nav className="nav">
			<Filters
				onSingleGame={onSingleGame}
				isSearchClicked={isSearchClicked} 
				setFilters={setFilters}
				setFiltersElement={setFiltersElement}
			/>
			<Title />
			<Search 
				setSearchInput={setSearchInput} 
				isSearchClicked={isSearchClicked} 
				setIsSearchClicked={setIsSearchClicked}
			/>
		</nav>
	);
};

export default Navbar;