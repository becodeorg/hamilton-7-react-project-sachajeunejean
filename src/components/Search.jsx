import React, { useState } from 'react';

const Search = ({ setSearchInput, isSearchClicked, setIsSearchClicked }) => {
	const [isIconClicked, setIsIconCliked] = useState(false);
	const [showInputSearch, setShowInputSearch] = useState(false);

	const handleIconClick = () => {
		setIsIconCliked(!isIconClicked);
		setShowInputSearch(!showInputSearch);
		setIsSearchClicked(!isSearchClicked);
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter' && e.target.value) {
			setSearchInput(e.target.value);
		}
	};

	return (
		<div className="search">
			<span onClick={handleIconClick} className="search-icon material-symbols-outlined">
				{isIconClicked ? "close" : "search"}
			</span>
			<div onKeyDown={handleKeyDown} className={showInputSearch ? "container-input-search" : "hide"}>
				<input className="search-input" type="text" placeholder="Search a game..." />
			</div>
		</div>
	);
};

export default Search;