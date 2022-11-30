import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import Game from '../components/Game';

const SingleGame = ({ game, setSearchInput, setFilters, setFiltersElement }) => {

	
	return (
		<div className="page-wrapper">
			<Navbar
				onSingleGame={true}
				setSearchInput={setSearchInput}
				setFilters={setFilters}
				setFiltersElement={setFiltersElement}
			/>
			<Game game={game} />
		</div>
	);
};

export default SingleGame;