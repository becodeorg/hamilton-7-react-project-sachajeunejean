import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Homepage = ({ setSearchInput }) => {
	const [filters, setFilters] = useState([]);

	return (
		<Navbar setSearchInput={setSearchInput} setFilters={setFilters} />
	);
};

export default Homepage;