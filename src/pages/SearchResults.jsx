import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Category from '../components/Category';

const SearchResults = ({ searchInput, setSearchInput, filtersElement, setFiltersElement, filters, setFilters }) => {
	const [titleSearch, setTitleSearch] = useState("");
	const [searchGames, setSearchGames] = useState([]);
	const [isSearchInput, setIsSearchInput] = useState(false);

	const getData = async () => {
		const response = await axios.get(`https://api.rawg.io/api/games?key=5413a8afe0ff47fb974634bca7ebdcb5&search=${searchInput}`);

		let games = [];
		for (let data of response.data.results) {
			// name, release date, platforms, rating, genres, bg image
			const game = {
				id: data.id,
				name: data.name,
				date: data.released,
				rating: data.rating,
				platforms: data.platforms,
				genres: data.genres,
				bgImg: data.background_image,
				screenshots: data.short_screenshots
			};

			if (data.rating !== 0) games.push(game);
		}
		setSearchGames(games);
	};

	useEffect(() => {
		if (searchInput.length !== 0) {
			setIsSearchInput(true);
			getData();
			setTitleSearch(`Results for "${searchInput}"`);
		} else {
			setIsSearchInput(false);
		}
	}, [searchInput, titleSearch, filters]);

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
			<section className="categories">
				<Category
					title={titleSearch}
					games={searchGames}
					filters={filters}
				/>
			</section>
		</div>
	);
};

export default SearchResults;