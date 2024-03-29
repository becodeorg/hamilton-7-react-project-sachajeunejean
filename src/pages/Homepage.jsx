import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Categories from '../components/Categories';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const Homepage = ({ setSearchInput, filtersElement, setFiltersElement, filters, setFilters, newTrendyGames, setNewTrendyGames, newReleasesGames, setNewReleasesGames, nextWeekReleasesGames, setNextWeekReleasesGames, setGame }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [sorts, setSorts] = useState([]);

	const getNewTrendyGames = async () => {
		let date = new Date();

		let day = date.getDate();
		let month = date.getMonth() + 1;
		let year = date.getFullYear();

		let currentDate = `${year}-${month}-${day}`;

		date = new Date();
		date.setDate(date.getDate() - 14);

		day = date.getDate();
		month = date.getMonth() + 1;
		year = date.getFullYear();	

		let lastMonthDate = `${year}-${month}-${day}`;

		const response = await axios.get(`https://api.rawg.io/api/games?key=5413a8afe0ff47fb974634bca7ebdcb5&ordering=-rating&dates=${lastMonthDate},${currentDate}&page_size=20`);
		
		const dataFetched = [...response.data.results];
		let games = [];
		for (let data of dataFetched) {
			// name, release date, platforms, rating, genres, bg image
			const game = {
				id: data.id,
				name: data.name,
				slug: data.slug,
				date: data.released,
				rating: data.rating,
				platforms: data.platforms,
				genres: data.genres,
				bgImg: data.background_image,
				screenshots: data.short_screenshots
			};

			if (data.rating !== 0) games.push(game);
		}

		setNewTrendyGames(games);
	};

	const getNewReleasesGames = async () => {
		let date = new Date();

		let day = date.getDate();
		let month = date.getMonth() + 1;
		let year = date.getFullYear();

		let currentDate = `${year}-${month}-${day}`;

		date = new Date();
		date.setDate(date.getDate() - 30);

		day = date.getDate();
		month = date.getMonth() + 1;
		year = date.getFullYear();		

		let lastWeekDate = `${year}-${month}-${day}`;

		const response = await axios.get(`https://api.rawg.io/api/games?key=5413a8afe0ff47fb974634bca7ebdcb5&dates=${lastWeekDate},${currentDate}&page_size=20`);
		const dataFetched = [...response.data.results];
		let games = [];
		for (let data of dataFetched) {
			// name, release date, platforms, rating, genres, bg image
			const game = {
				id: data.id,
				name: data.name,
				slug: data.slug,
				date: data.released,
				rating: data.rating,
				platforms: data.platforms,
				genres: data.genres,
				bgImg: data.background_image,
				screenshots: data.short_screenshots
			};

			if (data.rating !== 0) games.push(game);
		}
		
		setNewReleasesGames(games);
	};

	const getNextWeekReleases = async () => {
		let date = new Date();
	
		let day = date.getDate();
		let month = date.getMonth() + 1;
		let year = date.getFullYear();

		let currentDate = `${year}-${month}-${day}`;

		date = new Date();
		date.setDate(date.getDate() + 30);

		day = date.getDate();
		month = date.getMonth() + 1;
		year = date.getFullYear();

		let nextWeekDate = `${year}-${month}-${day}`;

		const response = await axios.get(`https://api.rawg.io/api/games?key=5413a8afe0ff47fb974634bca7ebdcb5&dates=${currentDate},${nextWeekDate}&page_size=20`);
		
		const dataFetched = [...response.data.results];
		let games = [];
		for (let data of dataFetched) {
			// name, release date, platforms, rating, genres, bg image
			const game = {
				id: data.id,
				name: data.name,
				slug: data.slug,
				date: data.released,
				rating: data.rating,
				platforms: data.platforms,
				genres: data.genres,
				bgImg: data.background_image,
				screenshots: data.short_screenshots
			};

			if (data.rating !== 0) games.push(game);
		}
		setNextWeekReleasesGames(games);
		setIsLoading(false);
	};

	useEffect(() => {
		getNewTrendyGames();
		getNewReleasesGames();
		getNextWeekReleases();
	}, [filters, sorts]);

	if (isLoading) {
		return (
			<div className="loading-container">
				<h2>EVERYONEGAMES</h2>
				<div className="lds-ring"><div></div><div></div><div></div><div></div></div>
			</div>
		);
	} else {
		return (
			<div className="homepage-elements">
				<Navbar
					onSingleGame={false}
					setSearchInput={setSearchInput}
					setFilters={setFilters}
					setFiltersElement={setFiltersElement}
				/>
				<Hero 
					filters={filters}
					setFilters={setFilters}
					filtersElement={filtersElement}
					setFiltersElement={setFiltersElement}
					sorts={sorts}
					setSorts={setSorts}
				/>
				<Categories
					newTrendyGames={newTrendyGames}
					newReleasesGames={newReleasesGames}
					nextWeekReleasesGames={nextWeekReleasesGames}
					filters={filters}
					setGame={setGame}
					sorts={sorts}
				/>
			</div>
		);
	}
};

export default Homepage;