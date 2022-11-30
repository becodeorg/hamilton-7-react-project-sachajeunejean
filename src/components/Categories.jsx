import React from 'react';
import Category from './Category';

const Categories = ({ newTrendyGames, newReleasesGames, nextWeekReleasesGames, filters, setGame }) => {
	return (
		<section className="categories">
			<Category 
				title="New and trending"
				games={newTrendyGames}
				filters={filters}
				setGame={setGame}
			/>
			<Category 
				title="New releases"
				games={newReleasesGames}
				filters={filters}
				setGame={setGame}
			/>
			<Category 
				title="Next releases"
				games={nextWeekReleasesGames}
				filters={filters}
				setGame={setGame}
			/>
		</section>
	);
};

export default Categories;