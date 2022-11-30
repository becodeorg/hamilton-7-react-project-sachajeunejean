import React, { useState } from 'react';
import Category from './Category';

const Categories = ({ newTrendyGames, newReleasesGames, nextWeekReleasesGames, filters, setGame, sorts }) => {
	return (
		<section className="categories">
			<Category 
				title="New and trending"
				games={newTrendyGames}
				filters={filters}
				setGame={setGame}
				sorts={sorts}
			/>
			<Category 
				title="New releases"
				games={newReleasesGames}
				filters={filters}
				setGame={setGame}
				sorts={sorts}
			/>
			<Category 
				title="Next releases"
				games={nextWeekReleasesGames}
				filters={filters}
				setGame={setGame}
				sorts={sorts} 
			/>
		</section>
	);
};

export default Categories;