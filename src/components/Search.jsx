import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = ({ setSearchInput, isSearchClicked, setIsSearchClicked }) => {
	const navigate = useNavigate();

	const [isIconClicked, setIsIconCliked] = useState(false);
	const [showInputSearch, setShowInputSearch] = useState(false);

	const handleIconClick = () => {
		setIsIconCliked(!isIconClicked);
		setShowInputSearch(!showInputSearch);
		setIsSearchClicked(!isSearchClicked);
	};

	const onSubmitForm = (e) => {
		e.preventDefault();

		if (e.target[0].value) {
			setSearchInput(e.target[0].value);
			navigate(`/search-results`);
		}
	};

	return (
		<div className="search">
			<span onClick={handleIconClick} className="search-icon material-symbols-outlined">
				{isIconClicked ? "close" : "search"}
			</span>
			<form onSubmit={onSubmitForm} className={showInputSearch ? "container-input-search" : "hide"}>
				<input className="search-input" type="text" placeholder="Search a game..." />
			</form>
		</div>
	);
};

export default Search;