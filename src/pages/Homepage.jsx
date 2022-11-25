import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Categories from '../components/Categories';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const Homepage = ({ setSearchInput }) => {
	const [filtersElement, setFiltersElement] = useState([]);
	const [filters, setFilters] = useState([]);
	const [newTrendyGames, setNewTrendyGames] = useState([]);

	const getNewTrendyGames = async () => {
		let date = new Date();

		let day = date.getDate();
		let month = date.getMonth() + 1;
		let year = date.getFullYear();

		let currentDate = `${year}-${month}-${day}`;
		let lastMonthDate = `${year}-${month - 1}-${day}`;

		const response = await axios.get(`https://api.rawg.io/api/games?key=5413a8afe0ff47fb974634bca7ebdcb5&ordering=-rating&dates=${lastMonthDate},${currentDate}&page_size=6`);
		
		const dataFetched = [...response.data.results];
		let games = [];
		for (let data of dataFetched) {
			// name, release date, platforms, rating, genres, bg image
			const game = {
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
		console.log(games);
		setNewTrendyGames(games);
	};

	useEffect(() => {
		getNewTrendyGames();
	}, []);

	return (
		<div className="homepage-elements">
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
			<Categories 
				newTrendyGames={newTrendyGames}
			/>
		</div>
	);
};

export default Homepage;