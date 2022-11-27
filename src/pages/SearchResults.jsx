import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const SearchResults = ({ searchInput, setSearchInput, filtersElement, setFiltersElement, filters, setFilters }) => {

	useEffect(() => {
		console.log(searchInput);
	}, []);

	return (
		<div className="page-wrapper">
			<Navbar 
				setSearchInput={setSearchInput}
				setFilters={setFilters}
				setFiltersElement={setFiltersElement}
			/>
			<Hero 
				filters={filters}
				setFilters={setFilters}
				filtersElement={filtersElement}
				setFiltersElement={setFiltersElement}
			/>
		</div>
	);
};

export default SearchResults;